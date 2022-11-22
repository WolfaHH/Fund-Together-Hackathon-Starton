import AccessCardStartonABI from "./ABI/AccessCardStarton.json";
import {ethers} from "ethers"
import provider from "./provider";

const IAccessCard = async (signer?:any) => {
    let customP = signer || provider
    let contractInstance = new ethers.Contract(
        "0x2D534627a5101396A75194C154AE11Edf798A957", // access card nft contract address BSC testnet
        AccessCardStartonABI, 
        customP
    ); 
    return contractInstance;
} 

export default IAccessCard;
