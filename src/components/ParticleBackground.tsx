import { useMemo } from 'react';

export const ParticleBackground = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1px to 4px
            duration: Math.random() * 20 + 15, // 15s to 35s speed
            delay: Math.random() * 20, // 0s to 20s delay
            opacity: Math.random() * 0.5 + 0.1
        }));
    }, []);

    return (
        <div className="particles-container">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `-${p.delay}s`, // Negative delay to start mid-animation
                    }}
                />
            ))}
        </div>
    );
};
