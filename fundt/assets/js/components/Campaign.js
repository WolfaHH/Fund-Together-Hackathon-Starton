
import React, {Component, useEffect} from 'react';
import {Route, Link, useParams} from 'react-router-dom';
import {useState} from "react";
import {connectWallet} from "../blockchain/connector";
import Faq from "./Faq";
import Feed from "./Feed";
import StakeInput from "./StakeInput";
import UnStakeInput from "./UnStakeInput";
import Card from "./Card";
import {GetCampaignData, GetContributor} from "./GetCampaignData";
import {GetUserName} from "./GetUserName";
import {Navigate} from "react-router-dom";
import CreateCamp from "./CreateCamp";
import EditCampaign from "./EditCampaign";
import {mintFakeToken} from "../blockchain/smc";

const Campaign = ({address, setAddress}) => {

    const [title, setTitle] = useState("...");
    const [tagline, setTagline] = useState("...");
    const [description, setDescription] = useState("...");
    const [category, setCategory] = useState("");
    const [banner, setBanner] = useState("");
    const [goal, setGoal] = useState("100");
    const [profit, setProfit] = useState("0");
    const [stake, setStake] = useState("0");
    const [ownername, setOwnername] = useState('...');
    const [owneraddress, setOwneraddress] = useState('...');
    const [balance, setBalance] = useState('1');
    let { id } = useParams();
    const CSS = `
                .rangebar {
                  width: 3%;
                }`;

    const [openStake, setOpenStake] = useState(false) // Setter pour la modale de "STAKE"
    const [openUnStake, setOpenUnStake] = useState(false) // Setter pour la modale de "UNSTAKE"
    const [qcq, setQcq] = useState(0);
    const [success, setSuccess] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [annonceAddress, setAnnonceAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    useEffect(() => {

        async function GetCampaign(id)
        {
            let tmp = await GetCampaignData(id);
            await console.log(tmp);
            await setTitle(tmp.title);
            await setTagline(tmp.tagline);
            await setDescription(tmp.description);
            await setGoal(tmp.goal) ;
            await setProfit(tmp.profit) ;
            await setStake(tmp.stake) ;
            await setOwnername(tmp.owner.name);
            await setOwneraddress(tmp.owner.address);
            await setAnnonceAddress(tmp.address);
            await setImg1(tmp.image_1);
            await setImg2(tmp.image_2);
            await setImg3(tmp.image_3);
            await console.log(annonceAddress);
            let tmp_1 = await GetContributor(id, address);
            await setBalance(tmp_1.stake);
        }
        GetCampaign(id).then( async () => {
                await setQcq(1)
                //await setSuccess(1);
            }
        ).catch( async () => {await setQcq(1);
            if (await annonceAddress === '')
            {
                console.log(await annonceAddress);
                await setSuccess(1);
            }
        });



    }, [])

    const changeModalt = event => {
        setIsActive(true);
    };
    const changeModalf = event => {
        if (isActive == true)
        {
            setIsActive(false);
        }
    };


    return (
        <main className="">
            {loading ?
                <div className="fixed left-1/4 right-1/4 flex flex-col text-center justify-center items-center mt-96">
                    <div className="" >
                        <span className="text-5xl text-blue-500 bold text-center">Transaction is currently pending, you have to wait some seconds....</span>
                    </div>
                </div>
                : null}


            <div className={isActive || loading ? 'opapa main bg-[#eff2f5] flex flex-col items-center' : 'main bg-[#eff2f5] flex flex-col items-center'} onClick={changeModalf}>
                {/* Redirection sur la page 404 si jamais la campagne n'existe pas */}
                { qcq && success ? <Navigate to="/404" replace={true} /> : null}

                {/* Bouton édition */}
                {address === owneraddress ?                <button type="button" onClick={changeModalt}
                                                                   className="fixed bottom-5 left-5 ml-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit
                </button> : null}



                {/* Modale STAKE              */}
                <StakeInput open={openStake} setOpen = {setOpenStake} annonceAddress={annonceAddress} userAddress={address} loading={loading} setLoading={setLoading}/>
                <UnStakeInput open={openUnStake} setOpen = {setOpenUnStake} annonceAddress={annonceAddress} userAddress={address} loading={loading} setLoading={setLoading} />

                <style>{CSS}</style>

                <div className="mt-20 flex flex-col items-center justify-center">
                    <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-6xl"><span
                        className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Welcome to</span>'{title}'</h1>
                    <p className=" text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{tagline}</p>
                </div>
                <div className="flex w-9/12 mt-16  justify-between">

                    <div className="max-w-2xl mx-auto w-6/12">

                        <div id="default-carousel" className="relative " data-carousel="static">
                            <div className="overflow-hidden relative h-56 rounded-2xl shadow-2xl sm:h-64 xl:h-80 2xl:h-96">
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <span
                                    className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                    <img src={img1 ? img1 : "https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                                         className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                         alt="..."/>
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={img2 ? img2 : "https://flowbite.com/docs/images/carousel/carousel-2.svg"}
                                         className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                         alt="..."/>
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={img3 ? img3 : "https://flowbite.com/docs/images/carousel/carousel-3.svg"}
                                         className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                         alt="..."/>
                                </div>
                            </div>

                            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false"
                                        aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false"
                                        aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false"
                                        aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            </div>

                            <button type="button"
                                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                                    data-carousel-prev>
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
                            </button>
                            <button type="button"
                                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                                    data-carousel-next>
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
                            </button>
                        </div>
                        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                    </div>




                    <div className="bg-white w-5/12 rounded-2xl shadow-2xl flex flex-col justify-between">

                        <div className="m-8 flex flex-col justify-start">
                            <div className="flex justify-between mb-2">
                                <span className="text-2xl text-base font-semibold text-blue-700 dark:text-white"><span className="text-2xl font-bold">{profit ? profit : 0} USDT</span> <span className="ml-2 text-sm font-medium text-gray-500">raised on a goal of <strong>{goal} USDT</strong></span> </span>
                                <span className="text-2xl font-bold text-blue-700 dark:text-white">{(profit / goal)*100}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                                <div className="rangebar bg-blue-600 h-5 rounded-full"></div>
                            </div>

                            <span className="mt-2 ml-2 text-lg font-medium text-gray-500 text-center"><strong>{stake >= 0 ? stake  : 0 } USDT</strong> are staked by contributors in total</span>
                        </div>
                        <div className="px-4 py-5 sm:p-6 ml-3">
                            <dt className="text-base font-normal text-gray-900">Your current staking</dt>
                            <dd className="pl-2 mt-1 flex items-baseline justify-between md:block lg:flex">

                                <div className="flex items-baseline text-2xl font-bold text-blue-600">
                                    {balance} USDT
                                    <span className="ml-2 text-sm font-medium text-gray-500">including <strong>$0</strong> of profit for this campaign</span>
                                </div>

                                <div
                                    className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">

                                    <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                              clip-rule="evenodd"/>
                                    </svg>

                                    <span className="sr-only"></span>
                                    0%
                                </div>
                            </dd>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                            <div className="flex flex-col justify-center items-center ">
                                <dt className="text-base font-normal text-gray-900 mb-3 roupipi">Owned by</dt>
                                <div className="flex justify-center items-center">
                                <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100 ml-14">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                    <button className="ml-2 text-sm font-medium text-gray-500 cursor-pointer"> <strong>{ownername} (</strong>{owneraddress.slice(0,5)}...<strong>)</strong></button>
                                </div>

                            </div>
                            { !address || address === ''? null :
                                <div className="flex justify-center mb-3 mt-10 mr-5 flex-wrap">
                                    <button type="button" onClick={() => {mintFakeToken()}}
                                            className="mr-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-2 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mint test token
                                    </button>
                                    <button type="button" onClick={() => {setOpenStake(true)}}
                                            className="mr-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stake
                                    </button>
                                    <button type="button" onClick={() => {setOpenUnStake(true)}}
                                            className="ml-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Unstake
                                    </button>
                                </div>}
                        </div>

                    </div>
                </div>

                <div className="bg-white w-10/12 rounded-2xl shadow-2xl flex flex-col justify-between mt-16 items-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center m-12">What about this campaign ?</h1>
                    <p className="mt-8 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center break-all">{description}</p>
                    <a href="#" onClick={() => {setOpenStake(true)}}
                       className="w-[300px] mb-14 mt-8  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Support this project now !
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>

                </div>
                <div className="bg-white w-10/12 rounded-2xl shadow-2xl flex flex-col justify-between mt-16 items-center">
                    <Feed id={id}/>
                </div>
                <div className="bg-white w-10/12 rounded-2xl shadow-2xl flex flex-col justify-between mt-16 items-center">
                    <Faq />
                </div>





            </div>

            <div className="modalee">{isActive  ?
                <EditCampaign isActive={isActive} setIsActive={setIsActive} id={id}/> : null}</div>
        </main>
    );
};

export default Campaign;


