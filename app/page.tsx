'use client';

import { useState, useEffect } from 'react';
import TypingText from '@/components/Terminal/TypingText';
import Cursor from '@/components/Terminal/Cursor';
import TerminalWindow from '@/components/Terminal/TerminalWindow';
import CommandLine from '@/components/Terminal/CommandLine';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const bootSequence = [
    '> SYSTEM BOOT...',
    '> Loading influexa v1.0.0',
    '> Initializing creator-brand interface...',
    '> Checking database connections... [OK]',
    '> Loading analytics engine... [OK]',
    '> Verifying security protocols... [OK]',
    '> System ready.',
  ];

  return (
    <div className="fade-in">
      {/* Boot Sequence */}
      <TerminalWindow title="system.log" showControls={true}>
        <div style={{ minHeight: '200px' }}>
          {bootSequence.map((line, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <TypingText
                text={line}
                speed={30}
                startDelay={index * 400}
                onComplete={() => {
                  if (index === bootSequence.length - 1) {
                    setTimeout(() => setBootComplete(true), 500);
                  }
                }}
              />
            </div>
          ))}
          {bootComplete && (
            <div style={{ marginTop: '16px', color: 'var(--terminal-accent)' }}>
              <TypingText
                text="[OK] System ready."
                speed={40}
                onComplete={() => setTimeout(() => setShowWelcome(true), 300)}
              />
            </div>
          )}
        </div>
      </TerminalWindow>

      {/* ASCII Art Logo */}
      {showWelcome && (
        <div className="fade-in" style={{ marginTop: 'var(--spacing-lg)' }}>
          <pre className="ascii-art" style={{ fontSize: '10px', lineHeight: '1.1' }}>
            {`╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   ██╗███╗   ██╗███████╗██╗     ██╗   ██╗███████╗██╗  ██╗ █████╗  ║
║   ██║████╗  ██║██╔════╝██║     ██║   ██║██╔════╝╚██╗██╔╝██╔══██╗ ║
║   ██║██╔██╗ ██║█████╗  ██║     ██║   ██║█████╗   ╚███╔╝ ███████║ ║
║   ██║██║╚██╗██║██╔══╝  ██║     ██║   ██║██╔══╝   ██╔██╗ ██╔══██║ ║
║   ██║██║ ╚████║██║     ███████╗╚██████╔╝███████╗██╔╝ ██╗██║  ██║ ║
║   ╚═╝╚═╝  ╚═══╝╚═╝     ╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ║
║                                                                ║
║              CREATOR ←→ BRAND CONNECTION PLATFORM              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝`}
          </pre>

          <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
            <TypingText
              text="Connecting authentic creators with visionary brands"
              speed={40}
              onComplete={() => setTimeout(() => setShowStats(true), 500)}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '8px', color: 'var(--terminal-muted)' }}>
            <TypingText
              text="Data-driven. Transparent. Trusted."
              speed={40}
              startDelay={2000}
            />
          </div>
        </div>
      )}

      {/* Statistics */}
      {showStats && (
        <div className="fade-in" style={{ marginTop: 'var(--spacing-xl)' }}>
          <TerminalWindow title="stats.txt">
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>PLATFORM METRICS</h2>
            <table className="terminal-table">
              <thead>
                <tr>
                  <th>METRIC</th>
                  <th>VALUE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Active Creators</td>
                  <td>1,247</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>VERIFIED</td>
                </tr>
                <tr>
                  <td>Brand Partners</td>
                  <td>342</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>ACTIVE</td>
                </tr>
                <tr>
                  <td>Campaigns Completed</td>
                  <td>1,847</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>SUCCESS</td>
                </tr>
                <tr>
                  <td>Total Impressions</td>
                  <td>847M+</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>GROWING</td>
                </tr>
                <tr>
                  <td>Avg. Campaign ROI</td>
                  <td>4.2x</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>OPTIMAL</td>
                </tr>
                <tr>
                  <td>Client Retention</td>
                  <td>94%</td>
                  <td style={{ color: 'var(--terminal-accent)' }}>EXCELLENT</td>
                </tr>
              </tbody>
            </table>
          </TerminalWindow>
        </div>
      )}

      {/* Quick Commands */}
      {showStats && (
        <div className="fade-in" style={{ marginTop: 'var(--spacing-lg)' }}>
          <TerminalWindow title="help.txt">
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>AVAILABLE COMMANDS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-sm)' }}>
              <div className="command-prompt">cat /about <span style={{ color: 'var(--terminal-muted)' }}>— Learn about our system</span></div>
              <div className="command-prompt">./process <span style={{ color: 'var(--terminal-muted)' }}>— See how it works</span></div>
              <div className="command-prompt">ls /creators <span style={{ color: 'var(--terminal-muted)' }}>— Browse creator network</span></div>
              <div className="command-prompt">tail -f /logs <span style={{ color: 'var(--terminal-muted)' }}>— View campaign logs</span></div>
              <div className="command-prompt">./verify <span style={{ color: 'var(--terminal-muted)' }}>— Check trust metrics</span></div>
              <div className="command-prompt">contact --new <span style={{ color: 'var(--terminal-muted)' }}>— Get in touch</span></div>
            </div>
            <div style={{ marginTop: 'var(--spacing-md)', color: 'var(--terminal-muted)', fontSize: '12px' }}>
              <p>&gt; Use the navigation menu above or type commands below to explore</p>
              <p>&gt; All systems operational <Cursor /></p>
            </div>
          </TerminalWindow>
        </div>
      )}

      {/* Interactive Command Line */}
      {showStats && (
        <div className="fade-in" style={{ marginTop: 'var(--spacing-lg)' }}>
          <TerminalWindow title="terminal">
            <CommandLine
              prompt="user@influexa:~$"
              placeholder="Type a command (e.g., cat /about, ./process, help)..."
              onCommand={(cmd) => {
                const command = cmd.trim().toLowerCase();

                // Command routing
                if (command === 'cat /about' || command === 'about') {
                  window.location.href = '/about';
                } else if (command === './process' || command === 'process' || command === 'how-it-works') {
                  window.location.href = '/how-it-works';
                } else if (command === 'ls /creators' || command === 'creators') {
                  window.location.href = '/creators';
                } else if (command === 'tail -f /logs' || command === 'logs' || command === 'campaigns') {
                  window.location.href = '/campaigns';
                } else if (command === './verify' || command === 'verify' || command === 'trust') {
                  window.location.href = '/trust';
                } else if (command === 'contact --new' || command === 'contact') {
                  window.location.href = '/contact';
                } else if (command === 'login --brand' || command === 'brand') {
                  window.location.href = '/login/brand';
                } else if (command === 'login --creator' || command === 'creator') {
                  window.location.href = '/login/creator';
                } else if (command === 'help' || command === '?') {
                  alert('Available commands:\n\n' +
                    'cat /about - Learn about our system\n' +
                    './process - See how it works\n' +
                    'ls /creators - Browse creator network\n' +
                    'tail -f /logs - View campaign logs\n' +
                    './verify - Check trust metrics\n' +
                    'contact --new - Get in touch\n' +
                    'login --brand - Brand login\n' +
                    'login --creator - Creator login\n' +
                    'clear - Clear terminal\n' +
                    'help - Show this message');
                } else if (command === 'clear' || command === 'cls') {
                  // Refresh the page to clear
                  window.location.reload();
                } else if (command === '' || command === 'cd ~' || command === 'home') {
                  window.location.href = '/';
                } else {
                  alert(`Command not found: ${cmd}\nType 'help' for available commands.`);
                }
              }}
            />
            <div style={{ marginTop: 'var(--spacing-sm)', color: 'var(--terminal-muted)', fontSize: '11px' }}>
              <p>💡 Tip: Type 'help' to see all available commands</p>
            </div>
          </TerminalWindow>
        </div>
      )}
    </div>
  );
}
