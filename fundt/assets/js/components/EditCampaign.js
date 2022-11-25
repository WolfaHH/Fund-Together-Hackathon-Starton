
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {useState} from "react";
import {connectWallet} from "../blockchain/connector";

const EditCampaign = ({isActive, setIsActive, id}) => {

    const [title, setTitle] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [banner, setBanner] = useState("");
    const [goal, setGoal] = useState("");

    const changeModal = event => {
        setIsActive(current => !current);
    };

    const submit = async (e) =>
    {
        console.log("quand il trou il trouve")
        e.preventDefault();
        let res = await fetch("http://localhost/api/store-campaign", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                title: title,
                tagline: tagline,
                description: description,
                category: category,
                banner: banner,
                goal: goal,
                address: (await connectWallet()).address[0],

            }),
        });

        setTitle('');
        setTagline('');
        setDescription('');
        setCategory('');
        setBanner('');
        setGoal('');
        changeModal();
        await window.location.reload();

    }

    return (
        <div >
            <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
                <div>
                    <div className="m-5 text-4xl font-semibold text-black">Edit your campaign</div>
                </div>
                <form className="w-9/12" onSubmit={submit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Change your
                            Title</label>
                        <input type="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} minLength="4" maxLength="35"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Choose a catchy title here !" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="slogan"
                               className="block mb-2 text-base font-medium text-gray-900 dark:text-white">change your Tagline</label>
                        <input  value={tagline} onChange={(e) => setTagline(e.target.value)} type="tagline" id="tagline" placeholder="Choose a catchy tagline here ! (max 90 char)" minLength="4" maxLength="95"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required/>
                    </div>
                    <div className="flex flex-col items-start mb-6">
                        <label htmlFor="categ"
                               className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Change category</label>
                        <select id="categ" value={category} onChange={(e) => setCategory(e.target.value)} required
                                className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled selected value="0">Choose a category</option>
                            <option value="Volunteer work">Volunteer work</option>
                            <option value="Education">Education</option>
                            <option value="Journalism">Journalism</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="8" type="text" id="description" placeholder="Write a longer description of your project here" minLength="4" maxLength="6000"
                                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6 flex flex-col items-start justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Change your banner (optionnal, we do not use it yet)</label>
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, or JPG (MAX.
                                    800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="goal" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Change your
                            money goal</label>
                        <input type="number" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}  max="10000000" min="100"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Choose an amount as money goal in Dollars $$" required/>
                    </div>
                    <button type="submit"
                            className="mb-6 mt-5 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit !!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCampaign;