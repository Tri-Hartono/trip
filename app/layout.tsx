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
        default: 'Jelana Explore - Paket Wisata Kepulauan Seribu',
        template: '%s | Jelana Explore',
    },
    description:
        'Nikmati liburan tak terlupakan di Kepulauan Seribu dengan Jelana Explore. Paket wisata snorkeling, island hopping, dan penginapan terbaik.',
    keywords: [
        'Kepulauan Seribu',
        'Tour Kepulauan Seribu',
        'Wisata Jakarta',
        'Snorkeling',
        'Island Hopping',
        'Paket Wisata Murah',
        'Jelana Explore',
        'Pulau Pramuka',
        'Pulau Seribu',
        'Wisata Bahari Jakarta',
    ],
    authors: [{ name: 'Jelana Explore', url: 'https://jelanaexplore.com' }],
    creator: 'Jelana Explore',
    publisher: 'Jelana Explore',

    // ─── Open Graph (WhatsApp, Facebook, LinkedIn, Telegram) ───────────────
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        alternateLocale: ['en_US'],
        url: 'https://www.jelanaexplore.com',
        title: 'Jelana Explore - Paket Wisata Kepulauan Seribu',
        description:
            'Jelajahi keindahan Kepulauan Seribu dengan paket wisata premium. Aman, nyaman, dan tak terlupakan.',
        siteName: 'Jelana Explore',
        images: [
            {
                // Ukuran 1200x630 ideal untuk WhatsApp, Facebook, LinkedIn
                url: 'https://www.jelanaexplore.com/images/og-image.jpg',
                secureUrl: 'https://www.jelanaexplore.com/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Jelana Explore - Paket Wisata Kepulauan Seribu',
                type: 'image/jpeg',
            },
        ],
    },

    // ─── Twitter / X Card ──────────────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        site: '@jelanaexplore', // handle Twitter akun brand
        creator: '@jelanaexplore', // handle Twitter penulis konten
        title: 'Jelana Explore - Paket Wisata Kepulauan Seribu',
        description:
            'Jelajahi keindahan Kepulauan Seribu dengan paket wisata premium. Snorkeling, island hopping, dan lebih banyak lagi!',
        images: {
            url: 'https://www.jelanaexplore.com/images/og-image.jpg',
            alt: 'Jelana Explore - Wisata Kepulauan Seribu',
        },
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

    // ─── Canonical & Verification ─────────────────────────────────────────
    alternates: {
        canonical: 'https://www.jelanaexplore.com',
        languages: {
            'id-ID': 'https://www.jelanaexplore.com',
        },
    },

    // ─── App Info (untuk rich preview di beberapa platform) ────────────────
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
