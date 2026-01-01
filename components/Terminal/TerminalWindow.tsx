'use client';

import { ReactNode } from 'react';

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
    showControls?: boolean;
}

export default function TerminalWindow({
    title = 'terminal',
    children,
    className = '',
    showControls = true
}: TerminalWindowProps) {
    return (
        <div className={`terminal-window ${className}`}>
            {showControls && (
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'var(--terminal-muted)',
                    fontSize: '12px',
                    letterSpacing: '4px'
                }}>
                    ● ● ●
                </div>
            )}
            {title && (
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: 'var(--terminal-muted)',
                    fontSize: '12px',
                    textTransform: 'uppercase'
                }}>
                    {title}
                </div>
            )}
            <div style={{ marginTop: showControls ? '30px' : '0' }}>
                {children}
            </div>
        </div>
    );
}
