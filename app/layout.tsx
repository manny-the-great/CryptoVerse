import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CryptoVerse - Your Gateway to Smarter Crypto Trading',
  description: 'Learn, practice, and master cryptocurrency trading with real-time simulations and guided education.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background relative overflow-x-hidden pt-20`}>
        {/* Subtle noise and glow overlay below content */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-background to-background pointer-events-none -z-10" />
        <div className="fixed inset-0 bg-grid-overlay pointer-events-none -z-10 mt-20" />
        
        <div className="relative z-10 w-full text-sm sm:text-base">
          {children}
        </div>
      </body>
    </html>
  );
}
