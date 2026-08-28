import type { Metadata } from 'next';

import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const title = 'KI in der Bodenkunde | SoilNet Workshop 2026';
const description =
  'Workshop zu KI-gestützter Erkennung von Bodenhorizonten am 9. Dezember 2026 in Berlin – mit Call for Posters.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      en: '/en/',
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KI in der Bodenkunde – SoilNet Workshop in Berlin am 9. Dezember 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
