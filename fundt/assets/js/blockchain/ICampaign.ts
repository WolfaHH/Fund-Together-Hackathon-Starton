import CampaignABI from "./ABI/Campaign.json";
import {ethers} from "ethers"
import provider from "./provider";

const ICampaign = async (signer?:any, contractAddress) => {
    let customP = signer || provider
    let contractInstance = new ethers.Contract(
        contractAddress, // individual campaign address BSC testnet
        CampaignABI, 
        customP
    ); 
    return contractInstance;
} 

export default ICampaign;
