import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Seribu Island Tours - Paket Wisata Kepulauan Seribu',
    description:
        'Jelajahi keindahan Kepulauan Seribu dengan paket wisata terbaik. Snorkeling, island hopping, dan pengalaman tak terlupakan menanti Anda.',
    keywords:
        'Kepulauan Seribu, tour, wisata, snorkeling, island hopping, Jakarta',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='id'>
            <body className={` antialiased bg-white`}>
                <Navbar />
                {children}
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
