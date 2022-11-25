
import React, {Component} from 'react';
import {connectWallet} from "../blockchain/connector";

export async function GetUserName(address) {

    let res = fetch("http://localhost/api/get-user-name", {
        method: "POST",
        body: JSON.stringify({
            address: address,

        }),
    }).then( async (res) => {
        let resJson = await res.json();

        if (res.status === 200) {
            return await resJson.name;
        } else {
            return 'no name';
        }
    } );

    return res;
}

export async function SetUserName(name) {


    let res = fetch("http://localhost/api/set-user-name", {
        method: "POST",
        body: JSON.stringify({
            address: ( await connectWallet()).address[0],
            name: name,

        }),
    }).then( async (res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } );

    return res;
}

