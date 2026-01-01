'use client';

import { useState, KeyboardEvent } from 'react';

interface CommandLineProps {
    prompt?: string;
    onCommand?: (command: string) => void;
    placeholder?: string;
    className?: string;
}

export default function CommandLine({
    prompt = 'user@agency:~$',
    onCommand,
    placeholder = 'Type a command...',
    className = ''
}: CommandLineProps) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim()) {
            setHistory(prev => [...prev, input]);
            if (onCommand) {
                onCommand(input);
            }
            setInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = Math.min(history.length - 1, historyIndex + 1);
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        }
    };

    return (
        <div className={`command-line-container ${className}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--terminal-accent)', whiteSpace: 'nowrap' }}>
                    {prompt}
                </span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="terminal-input"
                    style={{ flex: 1 }}
                />
            </div>
        </div>
    );
}
