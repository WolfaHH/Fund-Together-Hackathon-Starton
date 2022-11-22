import FakeTokenABI from "./ABI/FakeTokenABI.json";
import {ethers} from "ethers"
import provider from "./provider";

// Free Test USDC

const IFakeToken = async (signer?:any) => {
    let customP = signer || provider
    let contractInstance = new ethers.Contract(
        "0x97d8a4c69499c944c4EcFBb48fE563E53749b823", // fake token contract address BSC testnet
        FakeTokenABI, 
        customP
    ); 
    return contractInstance;
} 

export default IFakeToken;
