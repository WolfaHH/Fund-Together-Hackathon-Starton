import React, {useState, useEffect} from "react";
import Card from "./Card";
import {PencilIcon, CheckIcon, CurrencyDollarIcon} from '@heroicons/react/24/outline'
import EditPicture from "./EditUserModal";
import {connectWallet} from "../blockchain/connector";
import {GetUserName} from "./GetUserName";
import EditUserModal from "./EditUserModal";
import {CalculateEarnings} from "./Simulator";
import CreateCamp from "./CreateCamp";
import {approveTargetFT, contribute, getRandomNumber} from "../blockchain/smc";
import {utils} from "ethers";
import {GetAllCampaignData, GetCampaignOwner, GetCampaignUser} from "./GetCampaignData";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

export default function Dashboard({address, setAddress})
{

    const [cards, setCards] = useState([]);
    const [cardse, setCardse] = useState([]);
    const [openPP, setOpenPP] = useState(false) // Setter pour la modale de "STAKE"
    const [name, setName] = useState('...');
    const [isActive, setIsActive] = useState(false);
    const [rolle, setRolle] = useState('Roll')

    useEffect(() => {

        async function GetCampaigns()
        {
            await setCards(await GetCampaignUser(address));
            console.log(await GetCampaignUser(address));
        }
        GetCampaigns() .catch(console.error);

        async function GetCampaigns2()
        {
            await setCardse(await GetCampaignOwner(address));
            console.log(await GetCampaignOwner(address));
        }
        GetCampaigns2().catch(console.error);

    }, [])

    async function setRoll(win) {


        return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/set-roll", {
            method: "POST",
            body: JSON.stringify({
                userAddress: address,
                win:win
            }),
        }).then(async (res) => {
            return res.status === 200;
        });
    }

    async function checkRoll() {


        return fetch("http://localhost/api/check-roll", {
            method: "POST",
            body: JSON.stringify({
                userAddress: address,
            }),
        }).then(async (res) => {
            let resJson = await res.json();
            if (res.status === 200) {
                return await resJson;
            } else {
                return false;
            }
        });
    }

    const submit = async (e) =>
    {
        let check = await checkRoll();
        if (await check['check'] === true)
        {
            let win = 0;
            let res = await getRandomNumber();

            if (await res.data[0] === 42)
            {
                win = 1;
            }
            await setRoll(win);
            if (win === 1)
            {
                await setRolle(`You rolled 42 !!!!`);
            }else
            {
                await setRolle(`You rolled ${await res.data[0]} :/`);
            }
        }
        else
        {
            await setRolle(`You cannot roll now !`);
        }

        console.log('roll effecuté !')
    }

    const changeModalt = event => {
        setIsActive(true);
    };
    const changeModalf = event => {
        if (isActive == true)
        {
            setIsActive(false);
        }
    };

    useEffect(() => {
        // declare the data fetching function
        async function GetName()
        {
            let tmp = await GetUserName(address);
            await setName(String(tmp));

        }

        // call the function
        GetName()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    return (


        <div className="">
            <div className={isActive ? 'opapa flex flex-col items-center' : 'flex flex-col items-center'} onClick={changeModalf}>


                {/* Modales d'éditions  */}
                <EditUserModal open={openPP} setOpen = {setOpenPP} name = {name} setName = {setName} />

                <div className="flex items-center justify-center w-8/12">

                    <div className="bg-white w-8/12 center rounded-2xl shadow-2xl flex flex-row mt-16 items-center  flex-wrap justify-center m-3"data-aos="zoom-in-right" >
                        <div className="flex flex-col justify-center items-center relative">
                      <span className="inline-block h-36 w-36 overflow-hidden rounded-full bg-gray-100 m-10 mb-2">

                          <svg className="h-full w-full text-gray-300"  version="1.1" viewBox="0 0 480 480" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
	                    	<circle cx="240" cy="240" r="240" fill="#B8BAC0"/>
		                    	<path d="m240 360.07c-27.944 0-53.297-11.991-72.003-31.372-0.014 11.615-0.436 28.379-3.516 40.611 2.02 1.235 3.588 3.262 3.894 5.784 3.992 32.484 34.781 56.977 71.625 56.977 36.836 0 67.625-24.496 71.625-56.977 0.31-2.525 1.844-4.549 3.895-5.78-3.08-12.233-3.503-28.999-3.517-40.615-18.706 19.381-44.059 31.372-72.003 31.372z" fill="#fff"/>
		                    	<path d="m310.44 330.17c-18.549 18.477-43.242 29.896-70.44 29.896-27.944 0-53.297-11.991-72.003-31.372-0.014 11.615-0.436 28.379-3.516 40.611 2.02 1.235 3.588 3.262 3.894 5.784 1.765 14.359 8.778 27.144 19.223 36.954 48.168-6.782 102.84-54.345 122.84-81.873z" fill="#D7DBE0"/>
		                    	<path d="m312 160.07h-136c-22.055 0-40 17.945-40 40v48c0 61.758 46.656 112 104 112s104-50.242 104-112v-56c0-17.644-14.352-32-32-32z" fill="#fff"/>
		                    	<path d="m296 72.07h-104c-15.047 0-27.695 10.438-31.102 24.449-27.539 3.501-48.898 27.079-48.898 55.551v40c0 20.617 8.752 39.851 24 53.52v-45.52c0-22.055 17.945-40 40-40h136c17.648 0 32 14.355 32 32v53.511c15.251-13.667 24-32.899 24-53.511v-48c0-39.699-32.297-72-72-72z" fill="#5C546A"/>
	                        	<path d="m61.632 400.54c43.93 48.775 107.56 79.456 178.37 79.456s134.44-30.681 178.37-79.456c-7.66-10.356-18.462-18.77-32.352-22.659-0.32-0.09-0.641-0.16-0.969-0.207l-63.859-9.582c-0.391-0.059-1.227-0.09-1.625-0.09-4.039 0-7.445 3.012-7.938 7.023-4 32.48-34.789 56.977-71.625 56.977-36.844 0-67.633-24.492-71.625-56.977-0.5-4.129-4.219-7.234-8.141-7.02-0.469-0.027-0.93 0.012-1.422 0.086l-63.859 9.582c-0.328 0.047-0.648 0.117-0.969 0.207-13.89 3.891-24.692 12.304-32.352 22.66z" fill="#5C546A"/>
                            </svg>
                      </span>
                            <div onClick={() => {setOpenPP(true)}}  className="z-10 absolute top-48 pl-40 right-auto cursor-pointer"><svg width="39" height="21" viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="22" height="14" rx="7" fill="#2563EB"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59961 4.19922V5.26589H15.1996V4.19922H5.59961ZM5.59961 10.5992H8.79961V9.53255H5.59961V10.5992ZM11.9996 7.93255H5.59961V6.86589H11.9996V7.93255Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9317 4.83553L17.7637 5.66753C17.9024 5.8062 17.9024 6.0302 17.7637 6.16887L17.113 6.81953L15.7797 5.4862L16.4304 4.83553C16.4979 4.76798 16.5868 4.73242 16.6792 4.73242C16.7717 4.73242 16.8606 4.76442 16.9317 4.83553ZM11.4668 9.79909V11.1324H12.8001L16.7326 7.19998L15.3992 5.86665L11.4668 9.79909ZM12.505 10.4213H12.1779V10.0942L15.3992 6.87287L15.7264 7.19998L12.505 10.4213Z" fill="white"/>
                            </svg></div>
                            <h1 className="text-sm font-extrabold text-gray-600 cursor-pointer mt-2">{name}</h1>
                            <h1 className="text-sm font-bold text-gray-500 cursor-pointer mt-2 mb-10 hover:text-blue-800 cursor-pointer">{address}</h1>
                        </div> </div>
                    <div className="bg-white w-10/12 center rounded-2xl shadow-2xl flex flex-row mt-16 items-start  flex-wrap justify-center m-3" data-aos="zoom-in-left">
                        <div className="px-4 py-5 sm:p-6 ml-3 flex flex-col items-center mr-0 mt-3 mb-5">
                            <dt className="text-center text-2xl font-semibold leading-6 text-blue-500 underline mb-2">Your total staking</dt>
                            <dd className="pl-2 mt-8 flex items-baseline justify-between md:block lg:flex">
                                <div className="flex items-baseline text-2xl font-bold text-blue-600">
                                    NaN
                                    <span className="ml-2 text-sm font-medium text-gray-500">including <strong>$0</strong> of profit for all campaigns</span>
                                </div>

                                <div
                                    className="ml-5 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">

                                    <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                              clip-rule="evenodd"/>
                                    </svg>

                                    <span className="sr-only"></span>
                                    0.0%
                                </div>
                            </dd>
                            <a href="#" onClick={changeModalt}
                               className="w-[265px] mb-0 mt-10 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Create a new campaign
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div >
                </div>
                <div className="flex justify-center items-start  w-8/12">
                    <div className="bg-white w-6/12 center rounded-2xl shadow-2xl flex flex-col mt-2 items-center flex-wrap justify-center mr-5 " data-aos="zoom-in-right">
                        <h3 className="text-center text-2xl font-semibold leading-6 text-blue-500 underline pt-16 mb-10">Lottery </h3>
                        <img  src="https://cdn.discordapp.com/attachments/1033766278294421504/1044996668556333086/11124.jpg" width="44%" alt=""/>
                        <span className="ml-2 text-sm font-medium text-gray-500 w-8/12 text-center mt-5">Roll a number between 1-100 based on a blockchain protocol. If you roll 42 (1% of chances), we'll stake $100 your most staked campaign ! You have 1 roll a day (20hours countdown)</span>
                        <a href="#" onClick={submit}
                           className="w-[265px] mb-16 mt-10 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            {rolle}
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </a>

                    </div>
                    <div className="bg-white w-5/12 center rounded-2xl shadow-2xl flex flex-col  items-center  justify-center ml-2 " data-aos="zoom-in-left">
                        <CalculateEarnings />

                    </div>
                </div>

                <div className="shapebleu"></div>
                <div className="bg-[#2563EB] w-full opacity-90 flex flex-col justify-center items-center">

                    <div className="mr-96">
                        <div className="max-w-4xl lg:mx-auto mb-5 ">
                            <h2 className="underline text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white text-center mb-8">Your campaigns</h2>
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-wrap items-center justify-center">
                        {cards.map(card => (
                            <Card card={card} />
                        ))}

                    </div>

                </div>
                <div className="bg-[#2563EB] w-full opacity-90 flex flex-col justify-center items-center">

                    <div className="mr-96 mt-24">
                        <div className="max-w-4xl lg:mx-auto mb-5 ">
                            <h2 className="underline text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white text-center mb-8">Your staking</h2>
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-wrap items-center justify-center">
                        {cardse.map(carde => (
                            <Card card={carde}/>
                        ))}

                    </div>

                </div>
                <div className="shapebleurev"></div>


            </div>
            <div className="modalee">{isActive ?
                <CreateCamp isActive={isActive} setIsActive={setIsActive}/> : null}</div>
        </div>


    );
}