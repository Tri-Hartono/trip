import tripsData from '@/data/trips.json';

export interface Island {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    status: 'available' | 'coming-soon';
    packages: Package[];
}

export interface ScheduleActivity {
    time: string;
    activity: string;
    location: string;
}

export interface ScheduleDay {
    day: number;
    activities: ScheduleActivity[];
}

export interface AddOn {
    name: string;
    capacity: string;
    price: string;
}

export interface SnorkingSpot {
    island: string;
    time: string;
}

export interface PriceItem {
    range: string;
    price: number;
}

export interface Package {
    id: string;
    duration: string;
    durationCode: string;
    durationInDays: number;
    price: number;
    priceList?: PriceItem[];
    minPeople: number;
    description: string;
    facilities: string[];
    facilitiesExclude: string[];
    destinations: string[];
    meals: string[];
    highlights: string[];
    schedule?: ScheduleDay[];
    addons?: AddOn[];
    snorkingSpots?: SnorkingSpot[];
    galleryImages?: string[];
}

export interface FlattenedTrip extends Package {
    islandId: number;
    islandName: string;
    islandSlug: string;
    islandImage: string;
    islandDescription: string;
    islandStatus: 'available' | 'coming-soon';
}

// Load all islands data
export function getAllIslands(): Island[] {
    return tripsData as Island[];
}

// Get single island by slug
export function getIslandBySlug(slug: string): Island | null {
    const islands = getAllIslands();
    return islands.find((island) => island.slug === slug) || null;
}

// Get package by island slug and package ID
export function getPackageBySlugAndId(
    slug: string,
    packageId: string,
): FlattenedTrip | null {
    const island = getIslandBySlug(slug);
    if (!island) return null;

    const pkg = island.packages.find((p) => p.id === packageId);
    if (!pkg) return null;

    return {
        ...pkg,
        islandId: island.id,
        islandName: island.name,
        islandSlug: island.slug,
        islandImage: island.image,
        islandDescription: island.description,
        islandStatus: island.status,
    };
}

// Flatten all trips for easier searching
export function getFlattenedTrips(): FlattenedTrip[] {
    const islands = getAllIslands();
    const flattened: FlattenedTrip[] = [];

    islands.forEach((island) => {
        island.packages.forEach((pkg) => {
            flattened.push({
                ...pkg,
                islandId: island.id,
                islandName: island.name,
                islandSlug: island.slug,
                islandImage: island.image,
                islandDescription: island.description,
                islandStatus: island.status,
            });
        });
    });

    return flattened;
}

// Get unique island names
export function getUniqueIslandNames(): string[] {
    const islands = getAllIslands();
    return islands.map((island) => island.name);
}

// Get max price from all packages
export function getMaxPrice(): number {
    const trips = getFlattenedTrips();
    return Math.max(...trips.map((trip) => trip.price));
}

// Search and filter trips
export function searchAndFilterTrips(
    searchQuery: string = '',
    filters: {
        islands?: string[];
        minPrice?: number;
        maxPrice?: number;
        durations?: string[];
    } = {},
): FlattenedTrip[] {
    let trips = getFlattenedTrips();

    // Text search
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        trips = trips.filter(
            (trip) =>
                trip.islandName.toLowerCase().includes(query) ||
                trip.description.toLowerCase().includes(query) ||
                trip.duration.toLowerCase().includes(query) ||
                trip.highlights.some((h) => h.toLowerCase().includes(query)),
        );
    }

    // Island filter
    if (filters.islands && filters.islands.length > 0) {
        trips = trips.filter((trip) =>
            filters.islands!.includes(trip.islandName),
        );
    }

    // Price range filter
    if (filters.minPrice !== undefined) {
        trips = trips.filter((trip) => trip.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
        trips = trips.filter((trip) => trip.price <= filters.maxPrice!);
    }

    // Duration filter
    if (filters.durations && filters.durations.length > 0) {
        trips = trips.filter((trip) =>
            filters.durations!.includes(trip.durationCode),
        );
    }

    return trips;
}
