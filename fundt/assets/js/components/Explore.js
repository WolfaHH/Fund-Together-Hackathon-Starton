import React, {useEffect, useState} from "react";
import Card from "./Card";
import {GetAllCampaignData, GetCampaignData, GetContributor} from "./GetCampaignData";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

export default function Explore()
{

    //const cards = ["Dog", "Bird", "Cat", "Mouse", "Horse"];
    const [cards, setCards] = useState([]);
    useEffect(() => {

        async function GetCampaigns()
        {
            await setCards(await GetAllCampaignData());
            console.log(await GetAllCampaignData);
        }
        GetCampaigns() .catch(console.error);

    }, [])

    return (

        <div className="flex flex-col  items-center">
            <div className="bg-white w-8/12 center rounded-2xl shadow-2xl flex flex-col justify-between mt-16 items-center ">


                <form className="pb-5 pt-5 w-3/4">
                    <div className="flex">
                        <label htmlFor="search-dropdown"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown"
                                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1"
                                                                  fill="currentColor" viewBox="0 0 20 20"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg></button>
                        <div id="dropdown"
                             className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 gay"
                             data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                        >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Volunteer Work
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Education
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Journalism
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown"
                                   className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                   placeholder="Search campaigns (not needed now, because we show all our campaigns" required/>
                            <button type="submit"
                                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>



            </div>

            <div className="shapebleu"></div>
            <div className="bg-[#2563EB] w-full opacity-90 flex justify-center items-center">

                <div className="w-10/12 flex flex-wrap items-center justify-center">
                    {cards.map(card => (
                        <Card card={card} />
                    ))}

                </div>

            </div>
            <div className="shapebleurev"></div>

        </div>
    )
}