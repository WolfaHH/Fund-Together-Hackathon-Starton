import IIbTokenABI from "../ABI/IIbTokenABI.json";
import {ethers} from "ethers"
import getProvider from "./getProvider";

const IIbToken = async (IbAddress) => {
    let providerInstance = await getProvider();
    let contractInstance = new ethers.Contract(
        IbAddress, // IbToken contract address BSC testnet
        IIbTokenABI, 
        providerInstance.provider
    ); 
    return contractInstance;
} 

export default IIbToken;
