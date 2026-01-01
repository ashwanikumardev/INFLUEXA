'use client';

import { useState } from 'react';
import TerminalWindow from '@/components/Terminal/TerminalWindow';
import CommandLine from '@/components/Terminal/CommandLine';

export default function BrandLoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            setIsLoggedIn(true);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="fade-in">
                <TerminalWindow title="brand-auth.sh">
                    <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                        login --user-type=brand
                    </div>

                    <h1>BRAND AUTHENTICATION</h1>
                    <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

                    <form onSubmit={handleLogin} style={{ maxWidth: '500px' }}>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>
                                Username:
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="terminal-input"
                                placeholder="Enter username"
                                required
                            />
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>
                                Password:
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="terminal-input"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button type="submit" className="terminal-button">
                            [LOGIN]
                        </button>

                        <div style={{ marginTop: 'var(--spacing-lg)', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            <p>→ Secure authentication via OAuth 2.0 + MFA</p>
                            <p>→ All connections encrypted with TLS 1.3</p>
                        </div>
                    </form>
                </TerminalWindow>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <TerminalWindow title="brand-dashboard.sh">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    dashboard --user={username}
                </div>

                <pre style={{ fontSize: '14px', marginBottom: 'var(--spacing-lg)' }}>
                    {`╔════════════════════════════════════════╗
║        BRAND DASHBOARD v1.0            ║
╚════════════════════════════════════════╝

Welcome back, ${username}!
Last login: ${new Date().toLocaleString()}`}
                </pre>

                {/* Quick Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>ACTIVE CAMPAIGNS</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>3</div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>PENDING MATCHES</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>7</div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>MESSAGES</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>12 <span style={{ fontSize: '14px' }}>(4 unread)</span></div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>TOTAL SPEND</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>$47.2K</div>
                    </div>
                </div>

                {/* Recent Activity */}
                <h2>RECENT ACTIVITY</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <pre style={{ fontSize: '12px', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                    {`[2024-12-30 18:45] Creator match approved for Campaign TK-2024-091
[2024-12-29 14:22] Campaign TK-2024-089 completed - Report available
[2024-12-28 09:15] New proposal submitted for review
[2024-12-27 16:30] Payment processed: $12,400
[2024-12-26 11:05] 3 new creator recommendations available`}
                </pre>

                {/* Active Campaigns */}
                <h2>ACTIVE CAMPAIGNS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>CAMPAIGN ID</th>
                            <th>STATUS</th>
                            <th>CREATORS</th>
                            <th>PROGRESS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TK-2024-091</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>IN PROGRESS</td>
                            <td>8</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <td>TK-2024-092</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>CONTENT REVIEW</td>
                            <td>5</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>TK-2024-093</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>PLANNING</td>
                            <td>12</td>
                            <td>15%</td>
                        </tr>
                    </tbody>
                </table>

                {/* Recommended Creators */}
                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>RECOMMENDED CREATORS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <div style={{ fontSize: '13px', marginBottom: 'var(--spacing-sm)' }}>
                    Based on your campaign objectives and past performance:
                </div>
                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>CREATOR ID</th>
                            <th>NICHE</th>
                            <th>FOLLOWERS</th>
                            <th>ENG. RATE</th>
                            <th>MATCH %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CR-7841</td>
                            <td>Tech</td>
                            <td>147K</td>
                            <td>5.2%</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>94%</td>
                        </tr>
                        <tr>
                            <td>CR-5623</td>
                            <td>Tech</td>
                            <td>89K</td>
                            <td>6.1%</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>91%</td>
                        </tr>
                        <tr>
                            <td>CR-9012</td>
                            <td>Tech</td>
                            <td>234K</td>
                            <td>4.8%</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>89%</td>
                        </tr>
                    </tbody>
                </table>

                {/* Command Line */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '1px solid var(--terminal-text)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>QUICK ACTIONS</h3>
                    <CommandLine
                        prompt={`${username}@dashboard:~$`}
                        placeholder="Type command (e.g., 'new-campaign', 'view-analytics', 'messages')"
                        onCommand={(cmd) => alert(`Command executed: ${cmd}\n\n(This is a demo - full functionality requires backend integration)`)}
                    />
                    <div style={{ marginTop: 'var(--spacing-sm)', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                        Available commands: new-campaign | view-analytics | messages | creators | reports | settings | logout
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
