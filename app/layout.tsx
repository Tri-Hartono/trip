import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
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
            <body
                className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground font-sans`}
            >
                <Navbar />
                {children}
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
