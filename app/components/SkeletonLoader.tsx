import React from 'react'

const SkeletonLoader = () => {
    return (
        <div className="text-center py-10 text-gray-400">
            <table className="min-w-full text-sm text-white divide-y divide-gray-800">
                <thead className="bg-gray-800">
                    <tr>
                        {["Member", "Contact", "Plan", "Dates", "Status", "Actions"].map(
                            (head) => (
                                <th
                                    key={head}
                                    className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider"
                                >
                                    {head}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="animate-pulse hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700"></div>
                                    <div className="ml-4">
                                        <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
                                        <div className="h-3 bg-gray-600 rounded w-20"></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 bg-gray-700 rounded w-48 mb-1"></div>
                                <div className="h-3 bg-gray-600 rounded w-24"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 bg-gray-700 rounded w-24"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 bg-gray-700 rounded w-32 mb-1"></div>
                                <div className="h-3 bg-gray-600 rounded w-20"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 bg-gray-700 rounded w-20"></div>
                            </td>
                            <td className="px-6 py-4 text-right space-x-2">
                                <div className="h-4 bg-gray-700 rounded w-16"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SkeletonLoader