'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { path: '/', label: 'home', command: 'cd ~' },
    { path: '/about', label: 'about', command: 'cat /about' },
    { path: '/how-it-works', label: 'process', command: './process' },
    { path: '/creators', label: 'creators', command: 'ls /creators' },
    { path: '/campaigns', label: 'campaigns', command: 'tail -f /logs' },
    { path: '/trust', label: 'trust', command: './verify' },
    { path: '/login/brand', label: 'brand-login', command: 'login --brand' },
    { path: '/login/creator', label: 'creator-login', command: 'login --creator' },
    { path: '/contact', label: 'contact', command: 'contact --new' },
];

export default function TerminalNav() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav style={{
            borderBottom: '2px solid var(--terminal-text)',
            padding: 'var(--spacing-sm) 0',
            marginBottom: 'var(--spacing-lg)',
            position: 'sticky',
            top: 0,
            background: 'var(--terminal-bg)',
            zIndex: 1000
        }}>
            <div className="container">
                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-md)',
                    alignItems: 'center'
                }} className="desktop-nav">
                    <div style={{
                        fontWeight: '900',
                        fontSize: '20px',
                        marginRight: 'var(--spacing-md)',
                        letterSpacing: '2px'
                    }}>
                        INFLUEXA
                    </div>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            style={{
                                color: pathname === item.path ? 'var(--terminal-bg)' : 'var(--terminal-text)',
                                background: pathname === item.path ? 'var(--terminal-text)' : 'transparent',
                                padding: '4px 8px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                fontSize: '14px'
                            }}
                            onMouseEnter={(e) => {
                                if (pathname !== item.path) {
                                    e.currentTarget.style.background = 'var(--terminal-muted)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pathname !== item.path) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            &gt; {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: '2px solid var(--terminal-text)',
                        color: 'var(--terminal-text)',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
                </button>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="mobile-nav" style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: 'var(--spacing-sm)',
                        marginTop: 'var(--spacing-sm)',
                        paddingTop: 'var(--spacing-sm)',
                        borderTop: '1px solid var(--terminal-muted)'
                    }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: pathname === item.path ? 'var(--terminal-bg)' : 'var(--terminal-text)',
                                    background: pathname === item.path ? 'var(--terminal-text)' : 'transparent',
                                    padding: '8px',
                                    textDecoration: 'none',
                                    display: 'block'
                                }}
                            >
                                &gt; {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
        </nav>
    );
}
