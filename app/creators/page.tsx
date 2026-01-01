'use client';

import TerminalWindow from '@/components/Terminal/TerminalWindow';

export default function CreatorsPage() {
    return (
        <div className="fade-in">
            <TerminalWindow title="creators.db">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    ls -la /creators
                </div>

                <h1>CREATOR NETWORK</h1>
                <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

                {/* Directory Structure */}
                <pre style={{ fontSize: '13px', marginBottom: 'var(--spacing-lg)' }}>
                    {`drwxr-xr-x  creators/tech/              [247 creators]
drwxr-xr-x  creators/lifestyle/          [189 creators]
drwxr-xr-x  creators/beauty/             [156 creators]
drwxr-xr-x  creators/gaming/             [134 creators]
drwxr-xr-x  creators/education/          [98 creators]
drwxr-xr-x  creators/fitness/            [87 creators]
drwxr-xr-x  creators/food/               [76 creators]
drwxr-xr-x  creators/travel/             [71 creators]
drwxr-xr-x  creators/finance/            [64 creators]
drwxr-xr-x  creators/entertainment/      [125 creators]`}
                </pre>

                {/* Network Statistics */}
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-sm)' }}>
                    cat /creators/stats.txt
                </div>

                <h2>NETWORK STATISTICS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>METRIC</th>
                            <th>VALUE</th>
                            <th>TREND</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Creators</td>
                            <td>1,247</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>↑ +12% MoM</td>
                        </tr>
                        <tr>
                            <td>Active Campaigns</td>
                            <td>89</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>↑ +8% MoM</td>
                        </tr>
                        <tr>
                            <td>Avg. Engagement Rate</td>
                            <td>4.7%</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>↑ +0.3% MoM</td>
                        </tr>
                        <tr>
                            <td>Verified Accounts</td>
                            <td>100%</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>MAINTAINED</td>
                        </tr>
                        <tr>
                            <td>Combined Reach</td>
                            <td>127M+</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>↑ +15% MoM</td>
                        </tr>
                        <tr>
                            <td>Avg. Response Time</td>
                            <td>&lt;24hrs</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>OPTIMAL</td>
                        </tr>
                    </tbody>
                </table>

                {/* Creator Tiers */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>CREATOR TIERS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-md)' }}>
                        <h3 style={{ color: 'var(--terminal-accent)' }}>NANO (1K-10K followers)</h3>
                        <p>Count: 342 creators</p>
                        <p>Avg. Engagement: 6.2%</p>
                        <p>Best For: Niche targeting, authentic connections, high engagement</p>
                        <p style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            → Highly engaged communities<br />
                            → Cost-effective campaigns<br />
                            → Strong audience trust
                        </p>
                    </div>

                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-md)' }}>
                        <h3 style={{ color: 'var(--terminal-accent)' }}>MICRO (10K-100K followers)</h3>
                        <p>Count: 487 creators</p>
                        <p>Avg. Engagement: 5.1%</p>
                        <p>Best For: Targeted reach, community building, brand awareness</p>
                        <p style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            → Growing influence<br />
                            → Balanced reach & engagement<br />
                            → Professional content quality
                        </p>
                    </div>

                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-md)' }}>
                        <h3 style={{ color: 'var(--terminal-accent)' }}>MACRO (100K-1M followers)</h3>
                        <p>Count: 298 creators</p>
                        <p>Avg. Engagement: 3.8%</p>
                        <p>Best For: Mass reach, brand launches, market penetration</p>
                        <p style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            → Significant reach<br />
                            → Established credibility<br />
                            → Multi-platform presence
                        </p>
                    </div>

                    <div style={{ border: '1px solid var(--terminal-text)', padding: 'var(--spacing-md)' }}>
                        <h3 style={{ color: 'var(--terminal-accent)' }}>MEGA (1M+ followers)</h3>
                        <p>Count: 120 creators</p>
                        <p>Avg. Engagement: 2.9%</p>
                        <p>Best For: Maximum visibility, celebrity endorsements, viral potential</p>
                        <p style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            → Massive audience<br />
                            → Media coverage potential<br />
                            → Premium partnerships
                        </p>
                    </div>
                </div>

                {/* Verification Process */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>VERIFICATION PROCESS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <pre style={{ fontSize: '13px', lineHeight: '1.6' }}>
                    {`$ ./verify-creator --strict

[1/6] Identity verification............... [✓] PASSED
[2/6] Audience authenticity check......... [✓] PASSED
[3/6] Engagement quality analysis........ [✓] PASSED
[4/6] Content quality review............. [✓] PASSED
[5/6] Brand safety assessment............ [✓] PASSED
[6/6] Performance history check.......... [✓] PASSED

[OK] Creator verified and approved
     Added to network database
     Status: ACTIVE`}
                </pre>

                {/* Platform Distribution */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>PLATFORM DISTRIBUTION</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>PLATFORM</th>
                            <th>CREATORS</th>
                            <th>AVG. FOLLOWERS</th>
                            <th>AVG. ENGAGEMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Instagram</td>
                            <td>847</td>
                            <td>98K</td>
                            <td>4.2%</td>
                        </tr>
                        <tr>
                            <td>YouTube</td>
                            <td>623</td>
                            <td>156K</td>
                            <td>5.8%</td>
                        </tr>
                        <tr>
                            <td>TikTok</td>
                            <td>734</td>
                            <td>187K</td>
                            <td>7.1%</td>
                        </tr>
                        <tr>
                            <td>Twitter/X</td>
                            <td>456</td>
                            <td>67K</td>
                            <td>3.4%</td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>289</td>
                            <td>34K</td>
                            <td>2.9%</td>
                        </tr>
                    </tbody>
                </table>

                <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                    * Many creators maintain multi-platform presence
                </p>

                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '2px solid var(--terminal-accent)' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>
                        → INTERESTED IN JOINING OUR NETWORK?
                    </p>
                    <p style={{ margin: '8px 0 0 0' }}>
                        We're always looking for authentic, professional creators. Contact us to start the verification process.
                    </p>
                </div>
            </TerminalWindow>
        </div>
    );
}
