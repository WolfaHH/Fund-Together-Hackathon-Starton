import { Routes, Route} from "react-router-dom"
import React, {Component, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Campaign from "./components/Campaign";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import Quatrecentquatre from "./components/Quatrecentquatre";
import {useState} from "react";
import {connectWallet} from "./blockchain/connector";
import {Footer} from "./components/homePage/Footer";
export default function App() {


    const [address, setAddress] = useState('');
    const [check, setCheck] = useState(0);


    useEffect(() => {
        const tmp = localStorage.getItem('address');

        if (tmp != null && tmp !== 'null'){
            setAddress(tmp.slice(1, -1));
        }
        setCheck(1);

    }, []);

    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address));
    }, [address]);

    return (
        <div className="App">
            { check ?

                <Routes>
                    <Route path="/" element={<><Navbar address={address} setAddress={setAddress}/><Home address={address} setAddress={setAddress}/> </>}  />
                    <Route path="/:id" element={<><Navbar address={address} setAddress={setAddress}/><Campaign address={address} setAddress={setAddress}/><Footer /></>}  />
                    <Route path="/explore" element={<><Navbar address={address} setAddress={setAddress}/><Explore address={address} setAddress={setAddress}/><Footer /></>}  />
                    <Route path="/dashboard" element={<><Navbar address={address} setAddress={setAddress}/>{ address ? <Dashboard address={address} setAddress={setAddress}/> : <h1 className="text-center mt-16 text-5xl bold">You must be connected</h1> }</>}  />
                    <Route path="/404" element={<><Navbar address={address} setAddress={setAddress}/><Quatrecentquatre/></>}  />
                </Routes>
                : null
            }

        </div>
    )

}

