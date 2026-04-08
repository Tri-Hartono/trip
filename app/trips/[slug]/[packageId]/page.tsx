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

    const title = `Paket Wisata ${trip.islandName} ${trip.duration}`;
    const description = `${trip.description.substring(0, 150)}... Nikmati snorkeling and island hopping di Kepulauan Seribu - Mulai dari Rp ${trip.price.toLocaleString('id-ID')}.`;
    const pageUrl = `https://www.jelanaexplore.com/trips/${slug}/${packageId}`;
    const imageUrl = trip.islandImage?.startsWith('http')
        ? trip.islandImage
        : `https://www.jelanaexplore.com${trip.islandImage || '/images/og-image.webp'}`;

    return {
        title,
        description,
        keywords: [
            `Paket Wisata ${trip.islandName}`,
            `Open Trip ${trip.islandName}`,
            'Kepulauan Seribu',
            'Paket Snorkeling',
            'Wisata Bahari',
            'Jelana Explore',
        ],

        // ─── Open Graph (WhatsApp, Facebook, LinkedIn) ─────────────────────
        openGraph: {
            title: `${title} | Jelana Explore`,
            description,
            url: pageUrl,
            siteName: 'Jelana Explore',
            locale: 'id_ID',
            type: 'article',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `Promo Paket Wisata ${trip.islandName}`,
                },
            ],
        },

        // ─── Twitter Card ──────────────────────────────────────────────────
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Jelana Explore`,
            description,
            images: [imageUrl],
        },

        // ─── Canonical ─────────────────────────────────────────────────────
        alternates: {
            canonical: pageUrl,
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

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `Paket Wisata ${trip.islandName} ${trip.duration}`,
        image: `https://www.jelanaexplore.com${trip.islandImage}`,
        description: trip.description,
        brand: {
            '@type': 'Brand',
            name: 'Jelana Explore',
        },
        offers: {
            '@type': 'Offer',
            url: `https://www.jelanaexplore.com/trips/${slug}/${packageId}`,
            priceCurrency: 'IDR',
            price: trip.price,
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TripDetailClient trip={trip} />
        </>
    );
}
