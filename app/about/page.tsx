'use client';

import TerminalWindow from '@/components/Terminal/TerminalWindow';
import TypingText from '@/components/Terminal/TypingText';

export default function AboutPage() {
    return (
        <div className="fade-in">
            <TerminalWindow title="about.txt">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    cat /system/about.txt
                </div>

                <h1>SYSTEM INFORMATION</h1>
                <div style={{ borderBottom: '1px solid var(--terminal-text)', marginBottom: 'var(--spacing-md)' }} />

                <table style={{ marginBottom: 'var(--spacing-lg)', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '4px 0', width: '200px' }}>Name:</td>
                            <td>Influexa - Creator-Brand Connection Platform</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '4px 0' }}>Version:</td>
                            <td>1.0.0</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '4px 0' }}>Uptime:</td>
                            <td>5 years, 247 days</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '4px 0' }}>Status:</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>OPERATIONAL</td>
                        </tr>
                    </tbody>
                </table>

                <h2>MISSION</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <p>
                    Bridging the gap between authentic creators and forward-thinking brands through
                    data-driven matching, transparent processes, and measurable results.
                </p>
                <p>
                    We eliminate the noise and inefficiency in creator-brand partnerships by providing
                    a professional, systematic approach to collaboration.
                </p>

                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>CORE VALUES</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Transparency</strong> — All metrics visible, no hidden fees, complete clarity
                    </div>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Trust</strong> — 100% verified creators and brands, rigorous vetting process
                    </div>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Data-Driven</strong> — Analytics-first approach, measurable outcomes
                    </div>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Professionalism</strong> — Enterprise-grade service, dedicated support
                    </div>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Efficiency</strong> — Streamlined processes, rapid matching, quick deployment
                    </div>
                    <div>
                        <span style={{ color: 'var(--terminal-accent)' }}>[✓]</span> <strong>Results</strong> — ROI-focused campaigns, performance guarantees
                    </div>
                </div>

                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>SYSTEM ARCHITECTURE</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <pre style={{ fontSize: '12px', lineHeight: '1.4' }}>
                    {`influexa.com/
├── matching-engine/
│   ├── ai-scoring-algorithm
│   ├── audience-analysis
│   └── compatibility-matrix
├── verification-system/
│   ├── creator-authentication
│   ├── brand-validation
│   └── content-quality-check
├── analytics-platform/
│   ├── real-time-tracking
│   ├── performance-metrics
│   └── roi-calculator
└── communication-hub/
    ├── secure-messaging
    ├── contract-management
    └── payment-processing`}
                </pre>

                <h2 style={{ marginTop: 'var(--spacing-lg)' }}>WHY CHOOSE US</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '8px' }}>→ <strong>Proven Track Record:</strong> 1,847 successful campaigns completed</li>
                    <li style={{ marginBottom: '8px' }}>→ <strong>High ROI:</strong> Average 4.2x return on investment</li>
                    <li style={{ marginBottom: '8px' }}>→ <strong>Quality Network:</strong> Hand-picked, verified creators across all niches</li>
                    <li style={{ marginBottom: '8px' }}>→ <strong>Fast Matching:</strong> 72-hour average turnaround for creator recommendations</li>
                    <li style={{ marginBottom: '8px' }}>→ <strong>Full Support:</strong> Dedicated account managers for every partnership</li>
                    <li style={{ marginBottom: '8px' }}>→ <strong>Secure Platform:</strong> Enterprise-grade security and data protection</li>
                </ul>

                <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', border: '1px solid var(--terminal-text)' }}>
                    <p style={{ margin: 0, color: 'var(--terminal-accent)' }}>
                        &gt; SYSTEM STATUS: All services operational
                    </p>
                    <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                        Last updated: {new Date().toISOString()}
                    </p>
                </div>
            </TerminalWindow>
        </div>
    );
}
