import ICampaign from "./interfaces/ICampaign";
import ICampaignFactory from "./interfaces/ICampaignFactory";
import IAccessCard from "./interfaces/IAccessCard";
import IFakeToken from "./interfaces/IFakeToken";
import IIbToken from "./interfaces/IIbToken";
import axios from "axios"


const getMsgSender = async () => {
    let addressArray = await window.ethereum.request({ method: "eth_requestAccounts" });
    let addr = addressArray[0]
    return {addr};
}

// -------------------- IExec Oracle --------------------

export const getRandomNumber = async () => {
    let randomNumber = await axios.get("https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1")
    return randomNumber;
}

// -------------------- Test Token -------------------- 

export const mintFakeToken = async () => {
    try {
        const {addr} = await getMsgSender();
        await (await IFakeToken()).mint(addr, 1);
        return (true);
    } catch (e) {
        console.error("SM : Error minting fake token :", e)
    }
}

export const balOfFakeToken = async () => {
    try {
        const {addr} = await getMsgSender();
        let bal = await (await IFakeToken()).balanceOf(addr);
        return (bal);
    } catch (e) {
        console.error("SM : Error retrieving fake token balance:", e)
    }
}

export const approveTargetFT = async (_target, _amount) => {
    try {
        await (await IFakeToken()).approve(_target, _amount);
        return (true);
    } catch (e) {
        console.error("SM : Error approving fake token :", e)
    }
}

// -------------------- Test Token -------------------- 

export const balOfIbToken = async (IbAddress) => {
    try {
        const {addr} = await getMsgSender();
        let bal = await (await IIbToken(IbAddress)).balanceOf(addr);
        return (bal);
    } catch (e) {
        console.error("SM : Error retrieving IbToken balance:", e)
    }
}


// -------------------- Access Card -------------------- 

// Manual mint 

// export const mintAccessCard = async () => {
//     try {
//         const {addr} = await getMsgSender();
//         await (await IAccessCard()).mint(addr);
//         // tx.wait();
//         return (true);
//     } catch (e) {
//         console.error("SM : Error minting access card :", e)
//     }
// }

// -------------------- Campaign Factory -------------------- 
export const createNewCampaign = async (_minimumDeposit, _actualToken) => {
    try {
        const newCampaignAddress = await (await ICampaignFactory()).createCampaign(_minimumDeposit, _actualToken);
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
        await (await ICampaign(_contractAddress)).contribute(_amount);
    } catch (e) {
        console.error("SM : Error while contributing to campaign :", e)
    }
}

export const claim = async (_contractAddress, _amount) => {
    try {
        await (await ICampaign(_contractAddress)).claim(_amount);
    } catch (e) {
        console.error("SM : Error while withdrawing from campaign :", e)
    }
}

// # admin (campaign manager)

export const claimManager = async (_contractAddress, _amount) => {
    try {
        await (await ICampaign(_contractAddress)).adminClaim(_amount);
    } catch (e) {
        console.error("SM : Error while admin withdraw from campaign :", e)
    }
}

export const setMinimumContribution = async (_contractAddress, _amount) => {
    try {
        await (await ICampaign(_contractAddress)).setMinimumContribution(_amount);
    } catch (e) {
        console.error("SM : Error while admin set new minimum contribution :", e)
    }
}

export const setActualToken = async (_contractAddress, _newTokenAddress) => {
    try {
        await (await ICampaign(_contractAddress)).setActualToken(_newTokenAddress);
    } catch (e) {
        console.error("SM : Error while admin set new actual token :", e)
    }
}
