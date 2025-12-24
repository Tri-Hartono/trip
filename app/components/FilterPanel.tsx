'use client';

import { useState } from 'react';

export interface FilterPanelProps {
    islands: string[];
    maxPrice: number;
    onFilterChange: (filters: {
        islands: string[];
        minPrice: number;
        maxPrice: number;
        durations: string[];
    }) => void;
}

export default function FilterPanel({
    islands,
    maxPrice,
    onFilterChange,
}: FilterPanelProps) {
    const [selectedIslands, setSelectedIslands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState([0, maxPrice]);
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

    const handleIslandChange = (island: string) => {
        const updated = selectedIslands.includes(island)
            ? selectedIslands.filter((i) => i !== island)
            : [...selectedIslands, island];
        setSelectedIslands(updated);
        onFilterChange({
            islands: updated,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            durations: selectedDurations,
        });
    };

    const handlePriceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const newRange = [...priceRange];
        newRange[index] = Number(e.target.value);
        if (index === 0 && newRange[0] <= newRange[1]) {
            setPriceRange(newRange);
            onFilterChange({
                islands: selectedIslands,
                minPrice: newRange[0],
                maxPrice: newRange[1],
                durations: selectedDurations,
            });
        } else if (index === 1 && newRange[1] >= newRange[0]) {
            setPriceRange(newRange);
            onFilterChange({
                islands: selectedIslands,
                minPrice: newRange[0],
                maxPrice: newRange[1],
                durations: selectedDurations,
            });
        }
    };

    const handleDurationChange = (duration: string) => {
        const updated = selectedDurations.includes(duration)
            ? selectedDurations.filter((d) => d !== duration)
            : [...selectedDurations, duration];
        setSelectedDurations(updated);
        onFilterChange({
            islands: selectedIslands,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            durations: updated,
        });
    };

    const handleReset = () => {
        setSelectedIslands([]);
        setPriceRange([0, maxPrice]);
        setSelectedDurations([]);
        onFilterChange({
            islands: [],
            minPrice: 0,
            maxPrice: maxPrice,
            durations: [],
        });
    };

    const durationOptions = [
        { value: '1day', label: '1 Day Trip' },
        { value: '2d1n', label: '2 Days 1 Night' },
        { value: '3d2n', label: '3 Days 2 Nights' },
    ];

    return (
        <div className='bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-4'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-bold text-gray-800'>Filter</h3>
                {(selectedIslands.length > 0 ||
                    selectedDurations.length > 0 ||
                    priceRange[0] > 0 ||
                    priceRange[1] < maxPrice) && (
                    <button
                        onClick={handleReset}
                        className='text-sm text-blue-600 hover:text-blue-700 font-semibold'
                    >
                        Reset Semua
                    </button>
                )}
            </div>

            {/* Island Filter */}
            <div className='mb-6'>
                <h4 className='font-semibold text-gray-700 mb-3'>Pulau</h4>
                <div className='space-y-2'>
                    {islands.map((island) => (
                        <label
                            key={island}
                            className='flex items-center cursor-pointer group'
                        >
                            <input
                                type='checkbox'
                                checked={selectedIslands.includes(island)}
                                onChange={() => handleIslandChange(island)}
                                className='w-4 h-4 text-blue-600 rounded cursor-pointer'
                            />
                            <span className='ml-3 text-sm text-gray-700 group-hover:text-gray-900'>
                                {island}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Duration Filter */}
            <div className='mb-6 pb-6 border-b border-gray-200'>
                <h4 className='font-semibold text-gray-700 mb-3'>Durasi</h4>
                <div className='space-y-2'>
                    {durationOptions.map((option) => (
                        <label
                            key={option.value}
                            className='flex items-center cursor-pointer group'
                        >
                            <input
                                type='checkbox'
                                checked={selectedDurations.includes(
                                    option.value
                                )}
                                onChange={() =>
                                    handleDurationChange(option.value)
                                }
                                className='w-4 h-4 text-blue-600 rounded cursor-pointer'
                            />
                            <span className='ml-3 text-sm text-gray-700 group-hover:text-gray-900'>
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div>
                <h4 className='font-semibold text-gray-700 mb-3'>
                    Harga (IDR)
                </h4>
                <div className='space-y-4'>
                    {/* Min Price */}
                    <div>
                        <label className='text-sm text-gray-600 block mb-2'>
                            Min: Rp {priceRange[0].toLocaleString('id-ID')}
                        </label>
                        <input
                            type='range'
                            min='0'
                            max={maxPrice}
                            value={priceRange[0]}
                            onChange={(e) => handlePriceChange(e, 0)}
                            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600'
                        />
                    </div>

                    {/* Max Price */}
                    <div>
                        <label className='text-sm text-gray-600 block mb-2'>
                            Max: Rp {priceRange[1].toLocaleString('id-ID')}
                        </label>
                        <input
                            type='range'
                            min='0'
                            max={maxPrice}
                            value={priceRange[1]}
                            onChange={(e) => handlePriceChange(e, 1)}
                            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
