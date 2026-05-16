import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Navbar from './components/navbar';
import { LanguageProvider } from './context/LanguageContext';

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
      <body className={`${outfit.className} min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
