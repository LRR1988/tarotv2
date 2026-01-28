import os

path = r'c:\Users\trans\OneDrive\Documentos\CODE\ANTIGRAVITY\TAROTv2\src\pages\Horoscope.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the bad block
# Look for the pattern where we have two }); close to each other
# The dailyDraw ends at line 43 (0-indexed 42)
# The extra }); is at line 45 (0-indexed 44)

new_lines = []
skip = False
for i, line in enumerate(lines):
    # If we see line 45 (which is index 44) and it is exactly '});\n' or '});\r\n'
    if i == 44 and line.strip() == '});':
        print(f"Skipping line {i+1}: {line!r}")
        continue
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("File fixed.")
