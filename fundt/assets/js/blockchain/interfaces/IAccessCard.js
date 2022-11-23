import AccessCardABI from "../ABI/AccessCardABI.json";
import {ethers} from "ethers"
import getProvider from "./getProvider";

const IAccessCard = async () => {
    let providerInstance = await getProvider();
    let contractInstance = new ethers.Contract(
        "0xAB153C57cAdBEE57C7C5792E8e10E183bE46E8F0", // access card nft contract address BSC testnet
        AccessCardABI, 
        providerInstance.provider
    ); 
    return contractInstance;
} 

export default IAccessCard;
