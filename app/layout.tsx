import './globals.css';
import { Poppins, Bricolage_Grotesque } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage'
});

export const metadata = {
  title: 'CryptoVerse - Your Gateway to Smarter Crypto Trading',
  description: 'Learn, practice, and master cryptocurrency trading with real-time simulations and guided education.',
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${bricolage.variable} font-sans min-h-screen bg-background relative overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle noise and glow overlay below content */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/30 dark:from-neutral-800/30 via-background to-background pointer-events-none -z-10" />
          <div className="fixed inset-0 bg-grid-overlay pointer-events-none -z-10" />
          
          <div className="relative z-10 w-full text-sm sm:text-base">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
