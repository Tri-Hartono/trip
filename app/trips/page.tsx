import { Metadata } from 'next';
import TripsClient from './TripsClient';

export const metadata: Metadata = {
    title: 'Daftar Paket Wisata Kepulauan Seribu Terlengkap & Termurah',
    description:
        'Cari dan temukan paket wisata Kepulauan Seribu impian Anda. Paket 2H1M & 3H2M ke Pulau Pramuka, Tidung, Pari, dan lainnya dengan fasilitas snorkeling lengkap.',
    alternates: {
        canonical: 'https://www.jelanaexplore.com/trips',
    },
    openGraph: {
        title: 'Paket Wisata Kepulauan Seribu - Jelana Explore',
        description:
            'Koleksi paket wisata Kepulauan Seribu terbaik untuk liburan Anda. Snorkeling, island hopping, dan penginapan berkualitas.',
        url: 'https://www.jelanaexplore.com/trips',
        images: [
            {
                url: '/images/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Daftar Paket Wisata Jelana Explore',
            },
        ],
    },
};

export default function TripsPage() {
    return <TripsClient />;
}
