import {ethers} from "ethers"

let provider;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.

    provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  provider = new ethers.providers.StaticJsonRpcProvider (
    "https://data-seed-prebsc-1-s1.binance.org:8545"
)
}

export default provider;
