'use client';

import TerminalWindow from '@/components/Terminal/TerminalWindow';

export default function TrustPage() {
    return (
        <div className="fade-in">
            <TerminalWindow title="security-audit.log">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    ./verify --security-status
                </div>

                <h1>SECURITY AUDIT REPORT</h1>
                <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

                <pre style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                    {`Running comprehensive security audit...

[✓] SSL/TLS Encryption: ACTIVE
    → 256-bit encryption on all connections
    → Certificate valid until 2026-12-30
    → A+ rating on SSL Labs

[✓] Data Protection: GDPR COMPLIANT
    → Privacy policy updated 2024-01-15
    → Data retention policies enforced
    → User consent management active
    → Right to deletion implemented

[✓] Payment Security: PCI DSS LEVEL 1
    → Tokenized payment processing
    → No card data stored on servers
    → Annual compliance audit passed
    → Fraud detection active

[✓] Creator Verification: 100%
    → Multi-factor authentication required
    → Identity verification mandatory
    → Background checks completed
    → Continuous monitoring enabled

[✓] Brand Verification: 100%
    → Business registration verified
    → Financial background check
    → Contract signing authority confirmed
    → Payment capability validated

[✓] Contract Management: BLOCKCHAIN-BACKED
    → Immutable contract records
    → Cryptographic signatures
    → Tamper-proof audit trail
    → Smart contract automation

[✓] Dispute Resolution: 24HR RESPONSE
    → Dedicated mediation team
    → Clear escalation process
    → Legal support available
    → 98% resolution rate

[OK] All security checks passed
     Platform status: SECURE`}
                </pre>

                {/* Trust Metrics */}
                <h2>TRUST METRICS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <table className="terminal-table">
                    <thead>
                        <tr>
                            <th>METRIC</th>
                            <th>VALUE</th>
                            <th>BENCHMARK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Platform Uptime</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>99.97%</td>
                            <td>Industry: 99.5%</td>
                        </tr>
                        <tr>
                            <td>Successful Campaigns</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>1,847</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Dispute Rate</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>0.3%</td>
                            <td>Industry: 2.1%</td>
                        </tr>
                        <tr>
                            <td>Client Retention</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>94%</td>
                            <td>Industry: 78%</td>
                        </tr>
                        <tr>
                            <td>Creator Retention</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>91%</td>
                            <td>Industry: 72%</td>
                        </tr>
                        <tr>
                            <td>Payment Processing Time</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>&lt;48hrs</td>
                            <td>Industry: 7-14 days</td>
                        </tr>
                        <tr>
                            <td>Support Response Time</td>
                            <td style={{ color: 'var(--terminal-accent)' }}>&lt;2hrs</td>
                            <td>Industry: 24hrs</td>
                        </tr>
                    </tbody>
                </table>

                {/* Certifications */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>CERTIFICATIONS & COMPLIANCE</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <strong style={{ color: 'var(--terminal-accent)' }}>ISO 27001:2022</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                            Information Security Management System<br />
                            Certified: 2023-06-15 | Valid until: 2026-06-15
                        </p>
                    </div>

                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <strong style={{ color: 'var(--terminal-accent)' }}>SOC 2 TYPE II</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                            Service Organization Control Report<br />
                            Audit completed: 2024-03-20 | Next audit: 2025-03-20
                        </p>
                    </div>

                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <strong style={{ color: 'var(--terminal-accent)' }}>GDPR COMPLIANT</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                            General Data Protection Regulation<br />
                            Compliance verified: 2024-01-15 | Annual review: Ongoing
                        </p>
                    </div>

                    <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--terminal-text)' }}>
                        <strong style={{ color: 'var(--terminal-accent)' }}>PCI DSS LEVEL 1</strong>
                        <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                            Payment Card Industry Data Security Standard<br />
                            Certified: 2024-02-10 | Valid until: 2025-02-10
                        </p>
                    </div>
                </div>

                {/* Transparency Commitments */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>TRANSPARENCY COMMITMENTS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>No Hidden Fees:</strong> All costs disclosed upfront, transparent pricing structure
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>Real-Time Reporting:</strong> Live campaign metrics accessible 24/7
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>Verified Metrics:</strong> All engagement data authenticated and audited
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>Open Communication:</strong> Direct access to account managers and support team
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>Fair Contracts:</strong> Balanced terms protecting both creators and brands
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        <span style={{ color: 'var(--terminal-accent)' }}>→</span> <strong>Performance Guarantees:</strong> Clear SLAs with accountability measures
                    </li>
                </ul>

                {/* Client Testimonials */}
                <h2 style={{ marginTop: 'var(--spacing-xl)' }}>CLIENT TESTIMONIALS</h2>
                <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                <pre style={{ fontSize: '12px', lineHeight: '1.6' }}>
                    {`$ cat /testimonials/brands.txt

[TECH BRAND - ANONYMIZED]
Rating: 9.8/10
"The level of professionalism and transparency is unmatched. 
Every metric was verified, every creator was authentic, and 
the ROI exceeded our expectations by 340%."

[LIFESTYLE BRAND - ANONYMIZED]
Rating: 9.5/10
"Finally, a platform that treats creator partnerships as 
serious business. The data-driven approach and clear 
communication made this our most successful campaign."

[FITNESS BRAND - ANONYMIZED]
Rating: 9.9/10
"We've worked with multiple agencies, but none come close 
to this level of trust and results. The verification process 
ensures we only work with genuine creators."`}
                </pre>

                <pre style={{ fontSize: '12px', lineHeight: '1.6', marginTop: 'var(--spacing-md)' }}>
                    {`$ cat /testimonials/creators.txt

[TECH CREATOR - 250K FOLLOWERS]
Rating: 9.7/10
"Fast payments, clear contracts, and brands that actually 
align with my content. This is how creator partnerships 
should work."

[LIFESTYLE CREATOR - 89K FOLLOWERS]
Rating: 9.6/10
"The platform protects both sides equally. I feel secure 
knowing my work is valued and payments are guaranteed."

[GAMING CREATOR - 1.2M FOLLOWERS]
Rating: 9.8/10
"Professional, transparent, and efficient. The best 
platform I've worked with in 5 years of content creation."`}
                </pre>

                {/* Security Contact */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '2px solid var(--terminal-accent)' }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>SECURITY CONTACT</h3>
                    <p style={{ margin: 0, fontSize: '13px' }}>
                        Found a security issue? Report it to: <strong>contactinfluexa@gmail.com</strong><br />
                        We take security seriously and respond to all reports within 24 hours.
                    </p>
                    <p style={{ margin: '12px 0 0 0', fontSize: '12px', color: 'var(--terminal-muted)' }}>
                        Bug bounty program active | Responsible disclosure policy in effect
                    </p>
                </div>
            </TerminalWindow>
        </div>
    );
}
