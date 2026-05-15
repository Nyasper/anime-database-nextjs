import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Navbar from './navbar';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime Database',
  description: 'A modern database for animes and mangas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} pt-16 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
