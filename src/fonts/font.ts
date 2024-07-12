import { DM_Sans, DM_Mono, Inter } from 'next/font/google';

export const FontFirst = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-first'
});

export const FontSecond = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-second'
});

export const FontTerciary = Inter({
  weight: ['900'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-terciary'
});
