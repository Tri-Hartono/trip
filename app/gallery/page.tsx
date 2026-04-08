import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
    title: 'Galeri Foto Wisata Kepulauan Seribu',
    description:
        'Lihat koleksi foto keindahan Kepulauan Seribu. Snorkeling, island hopping, drone shots, dan akomodasi terbaik di Pulau Pramuka, Tidung, dan lainnya.',
    alternates: {
        canonical: 'https://www.jelanaexplore.com/gallery',
    },
    openGraph: {
        title: 'Galeri Foto Kepulauan Seribu - Jelana Explore',
        description:
            'Eksplorasi visual keindahan Kepulauan Seribu. Snorkeling, island hopping, dan pantai eksotis dalam bidikan lensa.',
        url: 'https://www.jelanaexplore.com/gallery',
        images: [
            {
                url: '/images/pramuka_1.webp',
                width: 1200,
                height: 630,
                alt: 'Galeri Foto Jelana Explore',
            },
        ],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
