import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './aihub.css';
import './aihub-components.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const display = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aihub.al'),
  title: {
    default: 'AI Hub · Advancing AI research, education & innovation in Albania',
    template: '%s · AI Hub',
  },
  description:
    'AI Hub is a non-profit advancing AI research, education, and innovation in Albania and its diaspora. Where AI meets ethics, innovation, and impact.',
  icons: {
    icon: '/assets/images/aihub-icon.png',
    apple: '/assets/images/aihub-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
