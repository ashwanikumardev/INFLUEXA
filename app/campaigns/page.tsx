'use client';

import TerminalWindow from '@/components/Terminal/TerminalWindow';

export default function CampaignsPage() {
    const campaigns = [
        {
            id: 'TK-2024-089',
            date: '2024-12-15',
            client: '[Tech Brand - Anonymized]',
            objective: 'Product Launch',
            creators: 12,
            duration: '30 days',
            impressions: '2,450,000',
            impTarget: '+340%',
            engagement: '147,000',
            engTarget: '+215%',
            conversions: '8,900',
            convTarget: '+180%',
            roi: '4.7x',
            rating: '9.8/10'
        },
        {
            id: 'LS-2024-076',
            date: '2024-11-28',
            client: '[Lifestyle Brand - Anonymized]',
            objective: 'Brand Awareness',
            creators: 8,
            duration: '21 days',
            impressions: '1,890,000',
            impTarget: '+280%',
            engagement: '98,500',
            engTarget: '+195%',
            conversions: '6,200',
            convTarget: '+165%',
            roi: '3.9x',
            rating: '9.5/10'
        },
        {
            id: 'FT-2024-063',
            date: '2024-11-10',
            client: '[Fitness Brand - Anonymized]',
            objective: 'Seasonal Campaign',
            creators: 15,
            duration: '45 days',
            impressions: '3,120,000',
            impTarget: '+410%',
            engagement: '187,000',
            engTarget: '+245%',
            conversions: '12,400',
            convTarget: '+220%',
            roi: '5.2x',
            rating: '9.9/10'
        }
    ];

    return (
        <div className="fade-in">
            <TerminalWindow title="campaigns.log">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    tail -f /var/log/campaigns/2024-Q4.log
                </div>

                <h1>CAMPAIGN LOGS</h1>
                <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

                {campaigns.map((campaign, index) => (
                    <div key={campaign.id} style={{
                        marginBottom: 'var(--spacing-xl)',
                        paddingBottom: 'var(--spacing-lg)',
                        borderBottom: index < campaigns.length - 1 ? '1px solid var(--terminal-muted)' : 'none'
                    }}>
                        <pre style={{ fontSize: '12px', color: 'var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }}>
                            {`[${campaign.date} 14:32:01] CAMPAIGN_ID: ${campaign.id}
[${campaign.date} 14:32:01] CLIENT: ${campaign.client}
[${campaign.date} 14:32:01] OBJECTIVE: ${campaign.objective}
[${campaign.date} 14:32:01] CREATORS: ${campaign.creators} matched
[${campaign.date} 14:32:01] DURATION: ${campaign.duration}
[${campaign.date} 14:32:01] STATUS: COMPLETED`}
                        </pre>

                        <h3 style={{ color: 'var(--terminal-accent)', marginTop: 'var(--spacing-md)' }}>RESULTS:</h3>
                        <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                        <table style={{ width: '100%', marginBottom: 'var(--spacing-sm)' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '4px 0', width: '200px' }}>Impressions:</td>
                                    <td style={{ fontWeight: 'bold' }}>{campaign.impressions}</td>
                                    <td style={{ color: 'var(--terminal-accent)' }}>({campaign.impTarget} vs target)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 0' }}>Engagement:</td>
                                    <td style={{ fontWeight: 'bold' }}>{campaign.engagement}</td>
                                    <td style={{ color: 'var(--terminal-accent)' }}>({campaign.engTarget} vs target)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 0' }}>Conversions:</td>
                                    <td style={{ fontWeight: 'bold' }}>{campaign.conversions}</td>
                                    <td style={{ color: 'var(--terminal-accent)' }}>({campaign.convTarget} vs target)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 0' }}>ROI:</td>
                                    <td style={{ fontWeight: 'bold', color: 'var(--terminal-accent)' }}>{campaign.roi}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 0' }}>Client Rating:</td>
                                    <td style={{ fontWeight: 'bold' }}>{campaign.rating}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{
                            padding: 'var(--spacing-sm)',
                            background: 'transparent',
                            border: '1px solid var(--terminal-accent)',
                            fontSize: '12px'
                        }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>KEY INSIGHTS:</strong>
                            <ul style={{ margin: '8px 0 0 20px', padding: 0 }}>
                                <li>All KPIs exceeded targets significantly</li>
                                <li>Creator content performed {campaign.roi.replace('x', '')}x above industry average</li>
                                <li>High client satisfaction score</li>
                                <li>Campaign completed on time and within budget</li>
                            </ul>
                        </div>
                    </div>
                ))}

                {/* Aggregate Statistics */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '2px solid var(--terminal-text)' }}>
                    <h2>AGGREGATE STATISTICS (2024)</h2>
                    <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                    <table className="terminal-table">
                        <thead>
                            <tr>
                                <th>METRIC</th>
                                <th>TOTAL</th>
                                <th>AVERAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Campaigns Completed</td>
                                <td>1,847</td>
                                <td>154/month</td>
                            </tr>
                            <tr>
                                <td>Total Impressions</td>
                                <td>847M+</td>
                                <td>458K/campaign</td>
                            </tr>
                            <tr>
                                <td>Total Engagement</td>
                                <td>42.3M+</td>
                                <td>22.9K/campaign</td>
                            </tr>
                            <tr>
                                <td>Total Conversions</td>
                                <td>1.2M+</td>
                                <td>650/campaign</td>
                            </tr>
                            <tr>
                                <td>Average ROI</td>
                                <td>-</td>
                                <td>4.2x</td>
                            </tr>
                            <tr>
                                <td>Client Satisfaction</td>
                                <td>-</td>
                                <td>9.4/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Performance Breakdown */}
                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                    <h2>PERFORMANCE BY CATEGORY</h2>
                    <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                    <table className="terminal-table">
                        <thead>
                            <tr>
                                <th>CATEGORY</th>
                                <th>CAMPAIGNS</th>
                                <th>AVG ROI</th>
                                <th>SUCCESS RATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tech</td>
                                <td>287</td>
                                <td>4.5x</td>
                                <td>96%</td>
                            </tr>
                            <tr>
                                <td>Lifestyle</td>
                                <td>342</td>
                                <td>4.1x</td>
                                <td>94%</td>
                            </tr>
                            <tr>
                                <td>Beauty</td>
                                <td>298</td>
                                <td>4.8x</td>
                                <td>97%</td>
                            </tr>
                            <tr>
                                <td>Fitness</td>
                                <td>234</td>
                                <td>3.9x</td>
                                <td>93%</td>
                            </tr>
                            <tr>
                                <td>Gaming</td>
                                <td>189</td>
                                <td>5.1x</td>
                                <td>98%</td>
                            </tr>
                            <tr>
                                <td>Other</td>
                                <td>497</td>
                                <td>3.7x</td>
                                <td>92%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '1px solid var(--terminal-accent)' }}>
                    <p style={{ margin: 0, color: 'var(--terminal-accent)', fontWeight: 'bold' }}>
                        → WANT TO SEE YOUR BRAND HERE?
                    </p>
                    <p style={{ margin: '8px 0 0 0' }}>
                        Contact us to discuss your campaign objectives and get matched with the perfect creators.
                    </p>
                </div>
            </TerminalWindow>
        </div>
    );
}
