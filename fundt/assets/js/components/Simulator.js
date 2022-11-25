import React, { useState } from "react"
import {Slider} from "@mui/material";


export const CalculateEarnings = () => {
    const [timeHeld, setTimeHeld] = useState(1);
    const [currentValue, setCurrentValue] = useState("1000");

    const getTotalAmount = () => {
        const totalAmount = (((parseInt(currentValue) * 1.1 **(timeHeld)))) - currentValue;
        return (totalAmount)
    }

    const getTotalValue = () => {
        const totalAmount = getTotalAmount();
        const totalValue = totalAmount;
        return (totalValue)
    }

    return (
        <>
            <h3 className="text-center text-2xl font-semibold leading-6 text-blue-500 underline pt-16">Staking Simulator</h3>

            <div className="my-10 md:mx-60  rounded-lg  shadow sm:grid sm:grid-cols-2 w-8/12">

                {/* <div className="sm:rounded-t-lg relative group col-span-2 bg-white/5 p-6">

          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-white">
              Principle Amount
            </h3>

            <input className="mt-2 text-sm text-gray-500 bg-transparent" type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
          </div>

        </div> */}

                <div className="relative group bg-white/10 p-6">

                    <div className="">
                        <h3 className="text-lg font-medium text-blue-500">
                            {/* <span className="absolute inset-0" aria-hidden="true"></span> */}
                            Starting Amount
                        </h3>
                        <input max={10000000} className="mt-2 static text-sm text-black bg-white/70 rounded" type="number" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
                        <form>

                        </form>
                    </div>
                </div>

                <div className="relative group bg-white/10 p-6">

                    <div className="">
                        <h3 className="text-lg font-medium text-blue-500">
                            <span className="absolute inset-0 " aria-hidden="true"></span>
                            Lowest Rate
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">10% a year</p>
                    </div>

                </div>

                <div className="relative group bg-white/10 p-6">

                    <div className="">
                        <h3 className="text-lg font-medium text-blue-500">
                            <span className="absolute inset-0 " aria-hidden="true"></span>
                            Projected Amount
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">{Math.round(getTotalAmount())} Tokens</p>
                    </div>

                </div>

                <div className="relative group bg-white/10 p-6">

                    <div className="">
                        <h3 className="text-lg font-medium text-blue-500">
                            <span className="absolute inset-0 " aria-hidden="true"></span>
                            Projected Value
                        </h3>
                        <p className="mt-2 text-sm text-gray-500"> {Math.round(getTotalValue())} USDT</p>
                    </div>

                </div>

                <div className="sm:rounded-bl-lg relative group col-span-2 bg-white/5 p-6">

                    <div className="">
                        <h3 className="text-lg font-medium text-blue-500">
                            {/* <span className="absolute inset-0 " aria-hidden="true"></span> */}
                            Select a period
                        </h3>

                        <Slider
                            value={timeHeld} min={1} max={5}
                            onChange={(e) => {setTimeHeld(e.target.value)}}
                            defaultValue={1}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                        {/* <input id="default-range" type="range" value="0" min="0" max="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/> */}
                        <p className="mt-2 text-sm text-center text-gray-500">{timeHeld} year</p>
                    </div>

                </div>

                {/* <div className="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white/10 p-6">
        <div className="">
          <h3 className="text-lg font-medium text-white">
              <span className="absolute inset-0 " aria-hidden="true"></span>
              News
          </h3>
          <p className="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
        </div>
      </div> */}

            </div>
        </>
    )
}