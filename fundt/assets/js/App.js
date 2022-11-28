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
import { useAccount } from 'wagmi'

export default function App() {

    const {address, isConnected} = useAccount();
    const [address42, setAddress] = useState('');
    const [check, setCheck] = useState(0);

    useEffect(() => {
        setAddress(address)


        async function connect() {
            try {
                console.log(address);
                //const connect = await connectWallet();
                //await console.log(connect.address);

                let res = await fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/store-user", {
                    method: "POST",
                    body: JSON.stringify({
                        address: address,
                    }),
                }).then( (res) => {
                    let resJson = res.json();
                    if (res.status === 200) {
                        if (resJson['valide'] === true)
                        {
                            //console.log("and well registered")
                        }
                    } else {
                    }
                    //setAddress(connect.address[0]);
                } );

            } catch (ex) {
                //console.log(ex)
            }


        }
        connect().then(r =>
        {
            console.log(address);

        });






    },[address])

    useEffect(() => {

        const tmp = localStorage.getItem('address');

        if (tmp != null && tmp !== 'null'){
            setAddress(tmp.slice(1, -1));
        }
        setCheck(1);

    }, []);

    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address42));
    }, [address42]);

    return (
        <div className="App">

            { check ?

                <Routes>
                    <Route path="/" element={<><Navbar address={address42} setAddress={setAddress}/><Home address={address42} setAddress={setAddress}/> </>}  />
                    <Route path="/:id" element={<><Navbar address={address42} setAddress={setAddress}/><Campaign address={address42} setAddress={setAddress}/><Footer /></>}  />
                    <Route path="/explore" element={<><Navbar address={address42} setAddress={setAddress}/><Explore address={address42} setAddress={setAddress}/><Footer /></>}  />
                    <Route path="/dashboard" element={<><Navbar address={address42} setAddress={setAddress}/>{ isConnected ? <Dashboard address={address42} setAddress={setAddress}/> : <h1 className="text-center mt-16 text-5xl bold">You must be connected</h1> }</>}  />
                    <Route path="/404" element={<><Navbar address={address42} setAddress={setAddress}/><Quatrecentquatre/></>}  />
                </Routes>
                : null
            }



        </div>
    )

}

