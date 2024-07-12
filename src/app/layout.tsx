import type { Metadata } from 'next';
import './globals.css';
import { FontFirst, FontTerciary } from '@/fonts/font';

export const metadata: Metadata = {
  title: 'Vazados do onlyfans',
  description: 'Vazados do OnlyFans'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontFirst.className} ${FontTerciary.variable}`}>
        {children}
      </body>
    </html>
  );
}
