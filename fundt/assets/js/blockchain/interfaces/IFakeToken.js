import FakeTokenABI from "../ABI/FakeTokenABI.json";
import {ethers} from "ethers"
import getProvider from "./getProvider";

// Free Test USDC

const IFakeToken = async () => {
    let providerInstance = await getProvider();
    let contractInstance = new ethers.Contract(
        "0xA9b64D80254BC665CdA3bc93C3566Fe56CfF9a38", // fake token contract address BSC testnet
        FakeTokenABI, 
        providerInstance.provider
    ); 
    return contractInstance;
} 

export default IFakeToken;
