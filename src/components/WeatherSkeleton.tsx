import React from "react"

export default function WeatherSkeleton() {
    return (
        <div className="animate-pulse space-y-4">
        {/* Skeleton for the first section */}
        <div className="space-y-2">
            <div className="h-8 w-40 bg-gray-300 rounded"></div>
            <div className="flex justify-between">
            <div className="h-12 w-24 bg-gray-300 rounded"></div>
            <div className="h-12 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="h-6 w-28 bg-gray-300 rounded"></div>
        </div>

        {/* Skeleton for the second section */}
        <div className="flex gap-4">
            <div className="w-24">
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="w-64">
            <div className="h-20 bg-yellow-300/80 rounded"></div>
            <div className="space-y-2">
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
            </div>
        </div>

        {/* Skeleton for the forecast section */}
        <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded"></div>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className="flex justify-between">
                <div className="h-24 w-24 bg-gray-300 rounded"></div>
                <div className="flex flex-col gap-2">
                <div className="h-6 w-36 bg-gray-300 rounded"></div>
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
                <div className="h-6 w-24 bg-gray-300 rounded"></div>
                <div className="h-6 w-24 bg-gray-300 rounded"></div>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
};