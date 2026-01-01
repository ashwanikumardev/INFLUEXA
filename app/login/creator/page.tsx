'use client';

import { useState } from 'react';
import TerminalWindow from '@/components/Terminal/TerminalWindow';
import CommandLine from '@/components/Terminal/CommandLine';

export default function CreatorLoginPage() {
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
                <TerminalWindow title="creator-auth.sh">
                    <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                        login --user-type=creator
                    </div>

                    <h1>CREATOR AUTHENTICATION</h1>
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
            <TerminalWindow title="creator-dashboard.sh">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    dashboard --user={username}
                </div>

                <pre style={{ fontSize: '14px', marginBottom: 'var(--spacing-lg)' }}>
                    {`╔════════════════════════════════════════╗
║       CREATOR DASHBOARD v1.0           ║
╚════════════════════════════════════════╝

Welcome back, ${username}!
Last login: ${new Date().toLocaleString()}`}
                </pre>

                {/* Quick Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>ACTIVE CAMPAIGNS</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>2</div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>NEW OPPORTUNITIES</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>5</div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>PENDING PAYMENT</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>$8.4K</div>
                    </div>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>TOTAL EARNED</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>$127K</div>
                    </div>
                </div>

                {/* Recent Activity */}
                <h2>RECENT ACTIVITY</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <pre style={{ fontSize: '12px', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                    {`[2024-12-30 16:20] Content approved for Campaign TK-2024-091
[2024-12-29 11:45] Payment received: $4,200
[2024-12-28 14:30] New campaign opportunity matched (94% fit)
[2024-12-27 09:15] Campaign TK-2024-087 completed successfully
[2024-12-26 13:40] Performance bonus unlocked: $500`}
                </pre>

                {/* Active Campaigns */}
                <h2>ACTIVE CAMPAIGNS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>CAMPAIGN ID</th>
                            <th>BRAND</th>
                            <th>STATUS</th>
                            <th>DEADLINE</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TK-2024-091</td>
                            <td>[Tech Brand]</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>IN PROGRESS</td>
                            <td>2025-01-05</td>
                            <td>$4,500</td>
                        </tr>
                        <tr>
                            <td>LS-2024-088</td>
                            <td>[Lifestyle Brand]</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>REVIEW</td>
                            <td>2025-01-08</td>
                            <td>$3,200</td>
                        </tr>
                    </tbody>
                </table>

                {/* Available Opportunities */}
                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>AVAILABLE OPPORTUNITIES</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <div style={{ fontSize: '13px', marginBottom: 'var(--spacing-sm)' }}>
                    Campaigns matched to your profile and audience:
                </div>
                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>CAMPAIGN</th>
                            <th>CATEGORY</th>
                            <th>DELIVERABLES</th>
                            <th>PAYMENT</th>
                            <th>MATCH %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TK-2024-094</td>
                            <td>Tech</td>
                            <td>2 videos + 3 posts</td>
                            <td>$5,200</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>94%</td>
                        </tr>
                        <tr>
                            <td>TK-2024-095</td>
                            <td>Tech</td>
                            <td>1 video + 5 posts</td>
                            <td>$4,800</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>91%</td>
                        </tr>
                        <tr>
                            <td>GM-2024-042</td>
                            <td>Gaming</td>
                            <td>3 streams</td>
                            <td>$6,500</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>87%</td>
                        </tr>
                    </tbody>
                </table>

                {/* Performance Metrics */}
                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>YOUR PERFORMANCE METRICS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>METRIC</th>
                            <th>YOUR VALUE</th>
                            <th>NETWORK AVG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Campaigns Completed</td>
                            <td>47</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Avg. Client Rating</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>9.7/10</td>
                            <td>9.2/10</td>
                        </tr>
                        <tr>
                            <td>On-Time Delivery</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>98%</td>
                            <td>94%</td>
                        </tr>
                        <tr>
                            <td>Avg. Engagement Rate</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>5.8%</td>
                            <td>4.7%</td>
                        </tr>
                        <tr>
                            <td>Response Time</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>&lt;12hrs</td>
                            <td>&lt;24hrs</td>
                        </tr>
                    </tbody>
                </table>

                {/* Earnings Tracker */}
                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>EARNINGS TRACKER (2024)</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-sm)' }}>
                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>Q1</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$28.4K</div>
                    </div>
                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>Q2</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$31.2K</div>
                    </div>
                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>Q3</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$34.7K</div>
                    </div>
                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>Q4 (YTD)</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--terminal-accent)' }}>$32.9K</div>
                    </div>
                </div>

                {/* Command Line */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '1px solid var(--terminal-text)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>QUICK ACTIONS</h3>
                    <CommandLine
                        prompt={`${username}@dashboard:~$`}
                        placeholder="Type command (e.g., 'view-opportunities', 'submit-content', 'earnings')"
                        onCommand={(cmd) => alert(`Command executed: ${cmd}\n\n(This is a demo - full functionality requires backend integration)`)}
                    />
                    <div style={{ marginTop: 'var(--spacing-sm)', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                        Available commands: view-opportunities | submit-content | earnings | messages | analytics | settings | logout
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
