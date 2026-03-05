import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Hubungi Kami - Booking Wisata Kepulauan Seribu',
    description:
        'Hubungi Jelana Explore untuk booking paket wisata Kepulauan Seribu. WhatsApp tersedia 06:00-18:00 WIB, respon dalam 30 menit.',
    openGraph: {
        title: 'Hubungi Jelana Explore - Booking Wisata Kepulauan Seribu',
        description:
            'Hubungi kami untuk booking paket wisata Kepulauan Seribu. Chat WhatsApp atau isi form booking online.',
        url: 'https://jelanaexplore.com/contact',
        images: ['/images/og-image.jpg'],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
