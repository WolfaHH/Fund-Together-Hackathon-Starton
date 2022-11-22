
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {useState} from "react";
import CreateCamp from "./CreateCamp";
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
        <main>
            <div class={isActive ? 'opapa main' : 'main'} onClick={changeModalf}>
                <button className="createcamp" type="button" onClick={changeModalt}
                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Create
                    a campaign
                </button>
                <br/><br/><br/>
            </div>
            <div class="modalee">{isActive ? <CreateCamp isActive={isActive} setIsActive={setIsActive}/> : null}</div>
        </main>
    );
};

export default Home;