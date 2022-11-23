




<div className="bg-white w-10/12 rounded-2xl shadow-2xl flex flex-col justify-between mt-16 items-center"></div>



import React from "react";

export default function Card() {



    return (
        <div className="m-2">
            <div className="card42 shadow-2xl rounded-xl">
                <div className="card-header42">
                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                         alt="rover"/>
                </div>
                <div className="card-body42">
                    <span className="tag42  font-semibold ">Associatif</span>
                    <h4 className="text-lg font-semibold mt-1">
                        La cagnotte du Z en pls
                    </h4>
                    <p className="text-sm font-base text-justify mt-3">
                        Le M et le Z s'affrontames dans un combat ubuesque, nonobstand, un ko technique arrivons par le M sur le Z. Tragédie? Je ne pense point cher ami, car tu ne le sais pas encore mais tu es déjà mort
                    </p>
                    <div className="flex user42">
                        <div className=" mr-20">                            <img
                            src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                            alt="user"/>
                            <div className="user-info42 w-32">
                                <h5>Nathanaël</h5>
                                <small>$15'789 staked in total</small>
                            </div></div>
                        <div className="">
                            <a href="#" onClick={() => {setOpenStake(true)}}
                               className="w-[150px]  mt-8  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Check more
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>

    )
}