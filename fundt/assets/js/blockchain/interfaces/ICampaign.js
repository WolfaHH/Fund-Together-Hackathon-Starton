import CampaignABI from "../ABI/Campaign.json";
import {ethers} from "ethers"
import getProvider from "./getProvider";

const ICampaign = async (contractAddress) => {
    let providerInstance = await getProvider();
    let contractInstance = new ethers.Contract(
        contractAddress, // individual campaign address BSC testnet
        CampaignABI, 
        providerInstance.provider
    ); 
    return contractInstance;
} 

export default ICampaign;
