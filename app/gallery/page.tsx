import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
    title: 'Galeri Foto Kepulauan Seribu',
    description:
        'Lihat koleksi foto keindahan Kepulauan Seribu. Foto snorkeling, island hopping, drone shots, dan akomodasi terbaik.',
    openGraph: {
        title: 'Galeri Foto Kepulauan Seribu - Jelana Explore',
        description:
            'Lihat koleksi foto keindahan Kepulauan Seribu. Snorkeling, island hopping, dan pantai eksotis.',
        url: 'https://jelanaexplore.com/gallery',
        images: ['/images/pramuka_1.webp'],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
