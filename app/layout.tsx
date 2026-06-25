import type { ReactNode } from 'react';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Wolfighter Boxing Trapani | Palestra di Boxe, Kickboxing e Muay Thai',
  description: 'Wolfighter Boxing è la palestra di boxe, kickboxing e Muay Thai a Trapani. Allenamenti per tutti i livelli: scopri i corsi e libera il lupo che è in te.',
  openGraph: {
    type: 'website',
    url: 'https://www.wolfighterboxing.it/',
    title: 'Wolfighter Boxing Trapani | Boxe, Kickboxing, Muay Thai',
    description: 'Libera il lupo che è in te. Allenamenti di boxe, kickboxing e Muay Thai a Trapani per ogni livello.',
    images: [{ url: 'https://www.wolfighterboxing.it/img/og-cover.jpg', width: 1200, height: 630 }],
    locale: 'it_IT',
    siteName: 'Wolfighter Boxing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolfighter Boxing Trapani',
    description: 'Libera il lupo che è in te. Boxe, kickboxing e Muay Thai a Trapani.',
    images: ['https://www.wolfighterboxing.it/img/og-cover.jpg'],
  },
  themeColor: '#1c1c1c',
  authors: [{ name: 'Wolfighter Boxing' }],
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/img/Logo2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/Logo2.png" />
        <link rel="canonical" href="https://www.wolfighterboxing.it/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          src="https://embeds.iubenda.com/widgets/110e2843-b707-4fb9-949f-251a766c3b6d.js"
          async
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}