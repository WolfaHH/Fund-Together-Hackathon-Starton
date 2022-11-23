import CampaignFactoryABI from "../ABI/CampaignFactory.json";
import {ethers} from "ethers"
import getProvider from "./getProvider";

const ICampaignFactory = async () => {
    let providerInstance = await getProvider();
    let contractInstance = new ethers.Contract(
        "0x8dac4D9a58b355A5Dc33DA60ebB652d0D6fEFbAf", // campaign factory contract address BSC testnet
        CampaignFactoryABI, 
        providerInstance.provider
    );
    return contractInstance;
} 

export default ICampaignFactory;
