import ICampaign from "./ICampaign";
import ICampaignFactory from "./ICampaignFactory";
import IAccessCard from "./IAccessCard";
import IFakeToken from "./IFakeToken";
import {ethers} from "ethers"
 

const getActualSigner = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let addressArray = await window.ethereum.request({ method: "eth_requestAccounts" });
    let addr = addressArray[0]
    const actualSigner = provider.getSigner(addr);
    return {actualSigner, addr};
}


// -------------------- Test Token -------------------- 

export const mintFakeToken = async () => {
    try {
        const {actualSigner, addr} = await getActualSigner();
        await (await IFakeToken(actualSigner)).mint(addr, 1000000000000000);
        return (true);
    } catch (e) {
        console.error("SM : Error minting fake token :", e)
    }
}

export const approveTargetFT = async (_target, _amount) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await IFakeToken(actualSigner)).approve(_target, _amount);
        return (true);
    } catch (e) {
        console.error("SM : Error approving fake token :", e)
    }
}

// -------------------- Access Card -------------------- 

// mint now restricted to Minter Role 

// export const mintAccessCard = async () => {
//     try {
//         const {actualSigner, addr} = await getActualSigner();
//         await (await IAccessCard(actualSigner)).mint(addr);
//         // tx.wait();
//         return (true);
//     } catch (e) {
//         console.error("SM : Error minting access card :", e)
//     }
// }

// -------------------- Campaign Factory -------------------- 
export const createNewCampaign = async (_minimumDeposit, _actualToken) => {
    try {
        const {actualSigner} = await getActualSigner();
        const newCampaignAddress = await (await ICampaignFactory(actualSigner)).createCampaign(_minimumDeposit, _actualToken);
        return (newCampaignAddress);
    } catch (e) {
        console.error("SM : Error creating new campaign :", e)
    }
}

export const getAllDeployedCampaigns = async () => {
    try {
        const allAddresses = await (await ICampaignFactory()).getDeployedCampaigns();
        return (allAddresses);
    } catch (e) {
        console.error("SM : Error retrieving all campaigns :", e)
    }

}

// -------------------- Campaign --------------------
// # user 

export const getSummary = async (_contractAddress) => {
    try {
        await (await ICampaign(_contractAddress)).getSummary();
    } catch (e) {
        console.error("SM : Error while retrieving campaign details :", e)
    }
}

export const contribute = async (_contractAddress, _amount) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await ICampaign(actualSigner, _contractAddress)).contribute(_amount);
    } catch (e) {
        console.error("SM : Error while contributing to campaign :", e)
    }
}

export const claim = async (_contractAddress, _amount) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await ICampaign(actualSigner, _contractAddress)).claim(_amount);
    } catch (e) {
        console.error("SM : Error while withdrawing from campaign :", e)
    }
}

// # admin (campaign manager)

export const claimManager = async (_contractAddress, _amount) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await ICampaign(actualSigner, _contractAddress)).adminClaim(_amount);
    } catch (e) {
        console.error("SM : Error while admin withdraw from campaign :", e)
    }
}

export const setMinimumContribution = async (_contractAddress, _amount) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await ICampaign(actualSigner, _contractAddress)).setMinimumContribution(_amount);
    } catch (e) {
        console.error("SM : Error while admin set new minimum contribution :", e)
    }
}

export const setActualToken = async (_contractAddress, _newTokenAddress) => {
    try {
        const {actualSigner} = await getActualSigner();
        await (await ICampaign(actualSigner, _contractAddress)).setActualToken(_newTokenAddress);
    } catch (e) {
        console.error("SM : Error while admin set new actual token :", e)
    }
}
