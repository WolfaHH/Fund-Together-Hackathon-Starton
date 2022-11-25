
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {useState} from "react";
import CreateCamp from "./CreateCamp";


import { CallToAction } from './homePage/CallToAction'
import { Faqs } from './homePage/Faqs'
import { Footer } from './homePage/Footer'
import { Hero } from './homePage/Hero'
import { Pricing } from './homePage/Pricing'
import { PrimaryFeatures } from './homePage/PrimaryFeatures'
import { SecondaryFeatures } from './homePage/SecondaryFeatures'

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);

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
        <div>
            <div class={isActive ? 'opapa main' : 'main'} onClick={changeModalf}>
                {/*
                    <button className="createcamp" type="button" onClick={changeModalt}
                            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Create
                        a campaign
                    </button>
                    */}
                <main>
                    <Hero />
                    <PrimaryFeatures />
                    <SecondaryFeatures />
                    <CallToAction />
                    <Pricing />
                    <Faqs />
                </main>
                <Footer />



            </div>
            <div class="modalee">{isActive ? <CreateCamp isActive={isActive} setIsActive={setIsActive}/> : null}</div>
        </div>
    );
};

export default Home;