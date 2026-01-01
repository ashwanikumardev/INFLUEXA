'use client';

import TerminalWindow from '@/components/Terminal/TerminalWindow';

export default function HowItWorksPage() {
  return (
    <div className="fade-in">
      <TerminalWindow title="process.sh">
        <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
          ./influexa --process
        </div>

        <h1>COLLABORATION PROCESS</h1>
        <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

        {/* Step 1 */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--terminal-accent)' }}>STEP 1: DISCOVERY</h2>
          <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
          <pre style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {`$ brand.submit(campaign_brief)
  → Input campaign objectives
  → Define target audience
  → Set budget parameters
  → Specify deliverables

$ system.analyze(requirements)
  → Parse campaign goals
  → Extract key metrics
  → Identify success criteria
  → Calculate resource needs

$ database.query(matching_creators)
  → Search creator network
  → Filter by niche/audience
  → Check availability
  → Verify engagement rates

[OK] Discovery phase complete
     Estimated matches: 15-20 creators`}
          </pre>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--terminal-accent)' }}>STEP 2: MATCHING</h2>
          <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
          <pre style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {`$ algorithm.score(creator_profiles)
  → Analyze audience demographics
  → Calculate engagement quality
  → Assess content style fit
  → Review past performance

$ system.rank(compatibility)
  → Apply weighted scoring
  → Sort by match percentage
  → Filter by availability
  → Consider budget alignment

$ team.review(top_matches)
  → Manual quality check
  → Verify authenticity
  → Assess brand safety
  → Confirm capacity

[OK] Matching complete
     Top 5 creators identified
     Match confidence: 92%`}
          </pre>
        </div>

        {/* Step 3 */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--terminal-accent)' }}>STEP 3: CONNECTION</h2>
          <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
          <pre style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {`$ influexa.introduce(brand, creator)
  → Send introduction message
  → Share campaign overview
  → Present collaboration terms
  → Schedule kickoff call

$ platform.facilitate(negotiation)
  → Enable secure messaging
  → Track discussion points
  → Manage revision requests
  → Document agreements

$ contract.generate(terms)
  → Create legal framework
  → Define deliverables
  → Set payment schedule
  → Establish timelines

[OK] Connection established
     Contract signed
     Campaign ready to launch`}
          </pre>
        </div>

        {/* Step 4 */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--terminal-accent)' }}>STEP 4: EXECUTION</h2>
          <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
          <pre style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {`$ creator.produce(content)
  → Develop creative assets
  → Follow brand guidelines
  → Meet quality standards
  → Submit for review

$ brand.review(deliverables)
  → Assess content quality
  → Check brand alignment
  → Request revisions if needed
  → Approve final version

$ system.track(performance)
  → Monitor posting schedule
  → Track real-time metrics
  → Collect engagement data
  → Flag any issues

[OK] Campaign live
     Content published
     Tracking active`}
          </pre>
        </div>

        {/* Step 5 */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--terminal-accent)' }}>STEP 5: REPORTING</h2>
          <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />
          <pre style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
            {`$ analytics.compile(metrics)
  → Aggregate performance data
  → Calculate engagement rates
  → Measure conversion impact
  → Assess audience sentiment

$ report.generate(insights)
  → Create visual dashboards
  → Highlight key findings
  → Compare vs. benchmarks
  → Provide recommendations

$ payment.process(completion)
  → Verify deliverables met
  → Release creator payment
  → Close campaign
  → Archive documentation

[OK] Campaign complete
     Final report delivered
     ROI: 4.7x (above average)`}
          </pre>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '2px solid var(--terminal-text)' }}>
          <h3>TYPICAL TIMELINE</h3>
          <table className="terminal-table" style={{ marginTop: 'var(--spacing-sm)' }}>
            <thead>
              <tr>
                <th>PHASE</th>
                <th>DURATION</th>
                <th>DELIVERABLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Discovery</td>
                <td>24-48 hours</td>
                <td>Campaign brief analysis</td>
              </tr>
              <tr>
                <td>Matching</td>
                <td>48-72 hours</td>
                <td>Creator recommendations</td>
              </tr>
              <tr>
                <td>Connection</td>
                <td>3-7 days</td>
                <td>Signed contracts</td>
              </tr>
              <tr>
                <td>Execution</td>
                <td>2-4 weeks</td>
                <td>Published content</td>
              </tr>
              <tr>
                <td>Reporting</td>
                <td>1-2 weeks</td>
                <td>Final analytics report</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '12px', color: 'var(--terminal-muted)' }}>
            * Timelines may vary based on campaign complexity and scope
          </p>
        </div>
      </TerminalWindow>
    </div>
  );
}
