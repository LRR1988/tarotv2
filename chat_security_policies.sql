-- Row Level Security Policies for Messages Table
-- These policies add server-side protection against spam and abuse

-- Enable RLS on messages table
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow anyone to read messages (but only today's messages via the query filter)
CREATE POLICY "Anyone can read messages"
ON messages FOR SELECT
USING (true);

-- Policy 2: Rate limiting - Prevent users from inserting more than 1 message per 3 seconds
-- This uses a PostgreSQL function to check recent inserts
CREATE OR REPLACE FUNCTION check_message_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if user has sent a message in the last 3 seconds
  IF EXISTS (
    SELECT 1 FROM messages
    WHERE user_name = NEW.user_name
    AND deck_id = NEW.deck_id
    AND created_at > NOW() - INTERVAL '3 seconds'
  ) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please wait before sending another message.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for rate limiting
DROP TRIGGER IF EXISTS message_rate_limit_trigger ON messages;
CREATE TRIGGER message_rate_limit_trigger
  BEFORE INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION check_message_rate_limit();

-- Policy 3: Content length validation (max 500 characters)
CREATE OR REPLACE FUNCTION check_message_length()
RETURNS TRIGGER AS $$
BEGIN
  IF LENGTH(NEW.content) > 500 THEN
    RAISE EXCEPTION 'Message too long. Maximum 500 characters allowed.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for length validation
DROP TRIGGER IF EXISTS message_length_trigger ON messages;
CREATE TRIGGER message_length_trigger
  BEFORE INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION check_message_length();

-- Policy 4: URL/Link detection and blocking
CREATE OR REPLACE FUNCTION check_message_urls()
RETURNS TRIGGER AS $$
BEGIN
  -- Block messages containing URLs or common TLDs
  IF NEW.content ~* '(https?://|www\.|\.com|\.net|\.org|\.io|\.es|\.co)' THEN
    RAISE EXCEPTION 'Links and URLs are not allowed in messages.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for URL blocking
DROP TRIGGER IF EXISTS message_url_trigger ON messages;
CREATE TRIGGER message_url_trigger
  BEFORE INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION check_message_urls();

-- Policy 5: Duplicate message prevention (same user, same content within 1 minute)
CREATE OR REPLACE FUNCTION check_duplicate_message()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM messages
    WHERE user_name = NEW.user_name
    AND deck_id = NEW.deck_id
    AND LOWER(content) = LOWER(NEW.content)
    AND created_at > NOW() - INTERVAL '1 minute'
  ) THEN
    RAISE EXCEPTION 'Duplicate message detected. Please send a different message.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for duplicate detection
DROP TRIGGER IF EXISTS message_duplicate_trigger ON messages;
CREATE TRIGGER message_duplicate_trigger
  BEFORE INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION check_duplicate_message();

-- Policy 6: Basic spam word filter
CREATE OR REPLACE FUNCTION check_spam_words()
RETURNS TRIGGER AS $$
DECLARE
  spam_words TEXT[] := ARRAY[
    'viagra', 'casino', 'lottery', 'winner', 'click here',
    'buy now', 'limited offer', 'act now', 'free money',
    'bitcoin', 'crypto', 'investment', 'profit', 'earn money'
  ];
  word TEXT;
BEGIN
  FOREACH word IN ARRAY spam_words
  LOOP
    IF LOWER(NEW.content) LIKE '%' || word || '%' THEN
      RAISE EXCEPTION 'Message contains prohibited content.';
    END IF;
  END LOOP;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for spam word filtering
DROP TRIGGER IF EXISTS message_spam_trigger ON messages;
CREATE TRIGGER message_spam_trigger
  BEFORE INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION check_spam_words();

-- Policy 7: Allow inserts (will be validated by triggers above)
CREATE POLICY "Allow message inserts with validation"
ON messages FOR INSERT
WITH CHECK (true);

-- Optional: Add an index to improve rate limit check performance
CREATE INDEX IF NOT EXISTS idx_messages_user_deck_time 
ON messages(user_name, deck_id, created_at DESC);
