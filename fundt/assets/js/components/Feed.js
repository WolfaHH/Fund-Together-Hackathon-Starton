
import React, {useEffect, useState} from "react";
import {GetAllCampaignData} from "./GetCampaignData";

const people = [
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://cdn.discordapp.com/attachments/993207352696250458/1045501009679626300/pngtree-user-vector-avatar-png-image_1541962.jpg',
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

export default function Feed({id}) {

    const [cards, setCards] = useState([]);
    useEffect(() => {

        async function GetAlldonations() {
            return fetch("http://localhost/api/get-donation-all", {
                method: "POST",
                body: JSON.stringify({
                    id:id
                }),
            }).then(async (res) => {
                let resJson = await res.json();
                if (res.status === 200) {
                    return await resJson;
                } else {

                    return [];
                }
            });
        }

        async function GetDonations()
        {
            setCards((await GetAlldonations()).reverse().slice(0, 6));
        }
        GetDonations() .catch(console.error);

    }, [])

    return (
        <div className="sm:p-8">
            <div className="max-w-4xl lg:mx-auto lg:text-center mt-20 mb-10 ">
                <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mb-10">Lastest donations</h2>
                <p className="mt-4 text-gray-500 text-lg ">
                    Here you can see latest transactions on this campaign ! It only shows stacking operations, not unstacking.
                </p>
            </div>
            <ul role="list" className="divide-y divide-gray-200 mb-10">
                {cards.map((card) => (
                    <li  className="py-4">
                        <div className="flex space-x-3">
                                                  <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100 ">

                          <svg className="h-full w-full text-gray-300"  version="1.1" viewBox="0 0 480 480" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
	                    	<circle cx="240" cy="240" r="240" fill="#B8BAC0"/>
		                    	<path d="m240 360.07c-27.944 0-53.297-11.991-72.003-31.372-0.014 11.615-0.436 28.379-3.516 40.611 2.02 1.235 3.588 3.262 3.894 5.784 3.992 32.484 34.781 56.977 71.625 56.977 36.836 0 67.625-24.496 71.625-56.977 0.31-2.525 1.844-4.549 3.895-5.78-3.08-12.233-3.503-28.999-3.517-40.615-18.706 19.381-44.059 31.372-72.003 31.372z" fill="#fff"/>
		                    	<path d="m310.44 330.17c-18.549 18.477-43.242 29.896-70.44 29.896-27.944 0-53.297-11.991-72.003-31.372-0.014 11.615-0.436 28.379-3.516 40.611 2.02 1.235 3.588 3.262 3.894 5.784 1.765 14.359 8.778 27.144 19.223 36.954 48.168-6.782 102.84-54.345 122.84-81.873z" fill="#D7DBE0"/>
		                    	<path d="m312 160.07h-136c-22.055 0-40 17.945-40 40v48c0 61.758 46.656 112 104 112s104-50.242 104-112v-56c0-17.644-14.352-32-32-32z" fill="#fff"/>
		                    	<path d="m296 72.07h-104c-15.047 0-27.695 10.438-31.102 24.449-27.539 3.501-48.898 27.079-48.898 55.551v40c0 20.617 8.752 39.851 24 53.52v-45.52c0-22.055 17.945-40 40-40h136c17.648 0 32 14.355 32 32v53.511c15.251-13.667 24-32.899 24-53.511v-48c0-39.699-32.297-72-72-72z" fill="#5C546A"/>
	                        	<path d="m61.632 400.54c43.93 48.775 107.56 79.456 178.37 79.456s134.44-30.681 178.37-79.456c-7.66-10.356-18.462-18.77-32.352-22.659-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09-4.039 0-7.445 3.012-7.938 7.023-4 32.48-34.789 56.977-71.625 56.977-36.844 0-67.633-24.492-71.625-56.977-0.5-4.129-4.219-7.234-8.141-7.02-0.469-0.027-0.93 0.012-1.422 0.086l-63.859 9.582c-0.328 0.047-0.648 0.117-0.969 0.207-13.89 3.891-24.692 12.304-32.352 22.66z" fill="#5C546A"/>
                            </svg>
                      </span>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">{card.contributor}</h3>
                                    <p className="text-sm text-gray-500">{card.time.date.slice(0,19)}</p>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Decided to stake <strong>{card.amount} USDT</strong> on this project !!!
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}