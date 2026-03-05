import { Metadata } from 'next';
import TripsClient from './TripsClient';

export const metadata: Metadata = {
    title: 'Paket Wisata Kepulauan Seribu',
    description:
        'Temukan semua paket wisata ke Kepulauan Seribu. Pilihan lengkap dari paket 2 hari 1 malam hingga 3 hari 2 malam dengan harga terbaik.',
    openGraph: {
        title: 'Paket Wisata Kepulauan Seribu - Jelana Explore',
        description:
            'Temukan semua paket wisata ke Kepulauan Seribu. Snorkeling, island hopping, dan penginapan terbaik.',
        url: 'https://jelanaexplore.com/trips',
        images: ['/images/og-image.jpg'],
    },
};

export default function TripsPage() {
    return <TripsClient />;
}
