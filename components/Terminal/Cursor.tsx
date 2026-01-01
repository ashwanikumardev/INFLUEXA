'use client';

interface CursorProps {
    blinkSpeed?: number;
    type?: 'block' | 'underline';
    className?: string;
}

export default function Cursor({
    blinkSpeed = 530,
    type = 'block',
    className = ''
}: CursorProps) {
    const cursorChar = type === 'block' ? '█' : '_';

    return (
        <span
            className={`cursor ${className}`}
            style={{
                animation: `blink ${blinkSpeed}ms infinite`,
                display: 'inline-block',
                marginLeft: '2px'
            }}
        >
            {cursorChar}
        </span>
    );
}
