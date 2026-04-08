import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Hubungi Jelana Explore - Booking Wisata Kepulauan Seribu',
    description:
        'Punya pertanyaan atau ingin booking? Hubungi tim Jelana Explore untuk paket wisata Kepulauan Seribu terbaik. Layanan cepat via WhatsApp atau Email.',
    alternates: {
        canonical: 'https://www.jelanaexplore.com/contact',
    },
    openGraph: {
        title: 'Hubungi Jelana Explore - Booking Wisata Kepulauan Seribu',
        description:
            'Tim kami siap membantu Anda merencanakan liburan di Kepulauan Seribu. Klik untuk chat WhatsApp atau hubungi kami sekarang.',
        url: 'https://www.jelanaexplore.com/contact',
        images: [
            {
                url: '/images/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Hubungi Jelana Explore',
            },
        ],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
