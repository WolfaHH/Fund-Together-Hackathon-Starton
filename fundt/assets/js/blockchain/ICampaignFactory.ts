import CampaignFactoryABI from "./ABI/CampaignFactory.json";
import {ethers} from "ethers"
import provider from "./provider";

const ICampaignFactory = async (signer?:any) => {
    let customP = signer || provider
    let contractInstance = new ethers.Contract(
        "0x2d21cC6FbBb8beBA6e4AF08Ab4Db0e5fCeB68939", // campaign factory contract address BSC testnet
        CampaignFactoryABI, 
        customP
    );
    return contractInstance;
} 

export default ICampaignFactory;
