








import React from "react";

export default function Card({card}) {

    if (card.state == null)
    {
        card.stake = 0;
    }



    return (
        <div className="m-2">
            <div className="card42 shadow-2xl rounded-xl">
                <div className="card-header42">
                    <img src={ card.image_1 ? card.image_1 : "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"}
                         alt="rover"/>
                </div>
                <div className="card-body42">
                    <span className="tag42  font-semibold ">{ card.category ? card.category : "Volunteer Work"}</span>
                    <h4 className="text-lg font-semibold mt-1">
                        {card.title}
                    </h4>
                    <p className="text-sm font-base text-justify mt-3 break-all">
                        {card.tagline}
                    </p>
                    <div className="flex user42">
                        <div className=" mr-20">                            <img
                            src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                            alt="user"/>
                            <div className="user-info42 w-32">
                                <h5>{card.owner.name}</h5>
                                <small>{card.staked} staked</small>
                            </div></div>
                        <div className="">
                            <a href={card.id} onClick={() => {setOpenStake(true)}}
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