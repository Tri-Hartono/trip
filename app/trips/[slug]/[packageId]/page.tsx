import { Metadata } from 'next';
import { getPackageBySlugAndId } from '@/lib/trips';
import TripDetailClient from './TripDetailClient';
import Link from 'next/link';

interface DetailPageProps {
    params: Promise<{
        slug: string;
        packageId: string;
    }>;
}

export async function generateMetadata({
    params,
}: DetailPageProps): Promise<Metadata> {
    const { slug, packageId } = await params;
    const trip = getPackageBySlugAndId(slug, packageId);

    if (!trip) {
        return {
            title: 'Paket Tidak Ditemukan',
            robots: { index: false },
        };
    }

    const title = `${trip.islandName} ${trip.duration}`;
    const description =
        trip.description.substring(0, 155) +
        (trip.description.length > 155 ? '...' : '');
    const pageUrl = `https://jelanaexplore.com/trips/${slug}/${packageId}`;
    const imageUrl = trip.islandImage?.startsWith('http')
        ? trip.islandImage
        : `https://jelanaexplore.com${trip.islandImage || '/images/og-image.jpg'}`;

    return {
        title,
        description,

        // ─── Open Graph (WhatsApp, Facebook, LinkedIn, Telegram) ───────────
        openGraph: {
            title: `${title} - Jelana Explore`,
            description,
            url: pageUrl,
            siteName: 'Jelana Explore',
            locale: 'id_ID',
            type: 'website',
            images: [
                {
                    url: imageUrl,
                    secureUrl: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${trip.islandName} - Paket Wisata Kepulauan Seribu`,
                    type: 'image/jpeg',
                },
            ],
        },

        // ─── Twitter / X Card ──────────────────────────────────────────────
        twitter: {
            card: 'summary_large_image',
            site: '@jelanaexplore',
            creator: '@jelanaexplore',
            title: `${title} - Jelana Explore`,
            description,
            images: {
                url: imageUrl,
                alt: `${trip.islandName} - Paket Wisata Kepulauan Seribu`,
            },
        },

        // ─── Canonical ─────────────────────────────────────────────────────
        alternates: {
            canonical: pageUrl,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
            },
        },
    };
}

export default async function TripDetailPage({ params }: DetailPageProps) {
    const { slug, packageId } = await params;
    const trip = getPackageBySlugAndId(slug, packageId);

    if (!trip) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center font-sans'>
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Paket tidak ditemukan
                </h1>
                <p className='text-gray-600 mb-6'>
                    Maaf, paket wisata yang Anda cari tidak tersedia.
                </p>
                <Link
                    href='/trips'
                    className='bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors'
                >
                    Kembali ke Paket Wisata
                </Link>
            </div>
        );
    }

    return <TripDetailClient trip={trip} />;
}
