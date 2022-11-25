import React, {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CurrencyDollarIcon} from '@heroicons/react/24/outline'
import {connectWallet} from "../blockchain/connector";
import {approveTargetFT, contribute, createNewCampaign} from "../blockchain/smc";
import {ethers, utils} from 'ethers';
function Input({valuee, setValuee}) {
    return (
        <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mt-3">
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input value={valuee} onChange={(e) => setValuee(e.target.value)}
                       type="text"
                       name="price"
                       id="price"
                       className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="0.00"
                       aria-describedby="price-currency"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USDT
          </span>
                </div>
            </div>
        </div>
    )
}


export default function StakeInput({open, setOpen, annonceAddress, setAnnonceAddress, userAddress, setUserAddress, loading, setLoading}) {
    //const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)
    const [valuee, setValuee] = useState(0);

    async function SetDonation() {


        return fetch("http://localhost/api/set-donation", {
            method: "POST",
            body: JSON.stringify({
                userAddress: userAddress,
                annonceAddress: annonceAddress,
                value:valuee,

            }),
        }).then(async (res) => {
            return res.status === 200;
        });
    }

    const sendTransaction = async() => {
        const approve = await approveTargetFT(annonceAddress, utils.parseUnits(valuee.toString(), 18)).catch(console.error);
        return await contribute(annonceAddress, utils.parseUnits(valuee.toString(), 18));
    }

    const submit = async (e) =>
    {
        setLoading(true);
        let res = await sendTransaction();
        await console.log(await res);
        if (await res === undefined)
        {
        }else
        {
            await SetDonation();
        }

        await window.location.reload();
        console.log('transaction effecuté !')
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                        <CurrencyDollarIcon className="h-14 w-14 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Secured Transaction
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                You're about to exchange USDT for IBUSDT. This will generate profit that will go directly on campaign's owner according to the amount of time you keep staking. Please remember you can get back your staking anytime. We do not own anything
                                            </p>
                                        </div>
                                        <Input valuee={valuee} setValuee={setValuee} />
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                        onClick={async () => {setOpen(false); await submit();}}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}