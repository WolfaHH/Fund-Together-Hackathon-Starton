import React from "react";
import {connectWallet} from "../blockchain/connector";

export async function GetCampaignData(id) {


    return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/get-campaign", {
        method: "POST",
        body: JSON.stringify({
            id: id,
        }),
    }).then(async (res) => {
        let resJson = await res.json();
        if (res.status === 200) {
            return await resJson;
        } else {

            return 0;
        }
    });
}

export async function GetContributor(id, address) {


    return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/get-contributor", {
        method: "POST",
        body: JSON.stringify({
            id: id,
            address: address
        }),
    }).then(async (res) => {
        let resJson = await res.json();
        if (res.status === 200) {
            return await resJson;
        } else {

            return 0;
        }
    });
}

export async function GetAllCampaignData() {


    return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/get-campaign-all", {
        method: "POST",
        body: JSON.stringify({
        }),
    }).then(async (res) => {
        let resJson = await res.json();
        if (res.status === 200) {
            return await resJson;
        } else {

            return [];
        }
    });
}


export async function GetCampaignUser(address) {


    return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/get-campaign-userr", {
        method: "POST",
        body: JSON.stringify({
            id: address,
        }),
    }).then(async (res) => {
        let resJson = await res.json();
        if (res.status === 200) {
            return await resJson;
        } else {

            return [];
        }
    });
}

export async function GetCampaignOwner(address) {


    return fetch("https://2ed9-2001-1715-4e22-3b30-5d9d-8743-1eed-5a00.eu.ngrok.io/api/get-campaign-ownerr", {
        method: "POST",
        body: JSON.stringify({
            id: address,
        }),
    }).then(async (res) => {
        let resJson = await res.json();
        if (res.status === 200) {
            return await resJson;
        } else {

            return [];
        }
    });
}