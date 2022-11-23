
import React from "react";

const people = [
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    // More people...
]
const activityItems = [
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1min ago' },
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h ago' },
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },

    // More items...
]

export default function Feed() {
    return (
        <div>
            <div className="max-w-4xl lg:mx-auto lg:text-center mt-20 mb-10">
                <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mb-10">Lastest donations</h2>
                <p className="mt-4 text-gray-500 text-lg ">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                    Urna, sed a lectus elementum blandit et.
                </p>
            </div>
            <ul role="list" className="divide-y divide-gray-200 mb-10">
                {activityItems.map((activityItem) => (
                    <li key={activityItem.id} className="py-4">
                        <div className="flex space-x-3">
                            <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                                    <p className="text-sm text-gray-500">{activityItem.time}</p>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Decided to stake <strong>13'000 USDT</strong> on this project !!!
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}