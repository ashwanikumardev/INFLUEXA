import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import TerminalNav from "@/components/Navigation/TerminalNav";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Influexa | Creator-Brand Connection Platform",
  description: "Data-driven creator-brand mediator agency. Connecting authentic creators with visionary brands through transparent, professional partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <TerminalNav />
        <main className="container">
          {children}
        </main>
        <footer style={{
          borderTop: '2px solid var(--terminal-text)',
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg) 0',
          textAlign: 'center',
          color: 'var(--terminal-muted)',
          fontSize: '12px'
        }}>
          <div className="container">
            <p>© 2024 INFLUEXA | ALL SYSTEMS OPERATIONAL</p>
            <p style={{ marginTop: '8px' }}>
              UPTIME: 99.97% | RESPONSE TIME: &lt;100ms | STATUS: ACTIVE
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

