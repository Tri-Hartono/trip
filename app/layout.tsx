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
    metadataBase: new URL('https://www.jelanaexplore.com'),
    title: {
        default: 'Jelana Explore - Spesialis Paket Wisata Kepulauan Seribu Terbaik',
        template: '%s | Jelana Explore',
    },
    description:
        'Penyedia paket wisata Kepulauan Seribu terpercaya. Nikmati open trip Pulau Pramuka, Tidung, Harapan, Pari, dan Kelapa dengan harga termurah dan fasilitas lengkap.',
    keywords: [
        'Kepulauan Seribu',
        'Paket Wisata Pulau Seribu',
        'Open Trip Kepulauan Seribu',
        'Tour Pulau Seribu Murah',
        'Snorkeling Jakarta',
        'Island Hopping Jakarta',
        'Wisata Bahari Indonesia',
        'Jelana Explore',
    ],
    authors: [{ name: 'Jelana Explore', url: 'https://www.jelanaexplore.com' }],
    creator: 'Jelana Explore',
    publisher: 'Jelana Explore',

    // ─── Open Graph (WhatsApp, Facebook, LinkedIn) ─────────────────────
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://www.jelanaexplore.com',
        title: 'Jelana Explore - Paket Wisata Kepulauan Seribu Terlengkap',
        description:
            'Jelajahi keindahan Kepulauan Seribu bersama Jelana Explore. Paket snorkeling, hopping island, dan homestay premium dengan harga bersahabat.',
        siteName: 'Jelana Explore',
        images: [
            {
                url: '/images/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Jelana Explore - Wisata Kepulauan Seribu',
            },
        ],
    },

    // ─── Twitter Card ──────────────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        title: 'Jelana Explore - Paket Wisata Kepulauan Seribu',
        description:
            'Liburan seru di Kepulauan Seribu! Paket open trip lengkap, murah, dan terpercaya.',
        images: ['/images/og-image.webp'],
    },

    // ─── Robots & Indexing ─────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // ─── Verification & Canonical ─────────────────────────────────────────
    alternates: {
        canonical: 'https://www.jelanaexplore.com',
    },

    applicationName: 'Jelana Explore',
    category: 'travel',
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
