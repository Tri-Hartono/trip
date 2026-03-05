import { MetadataRoute } from 'next';
import { getAllIslands } from '@/lib/trips';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jelanaexplore.com';
    const islands = getAllIslands();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/trips`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Dynamic trip pages
    const tripPages: MetadataRoute.Sitemap = islands.flatMap((island) =>
        island.packages.map((pkg) => ({
            url: `${baseUrl}/trips/${island.slug}/${pkg.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        })),
    );

    return [...staticPages, ...tripPages];
}
