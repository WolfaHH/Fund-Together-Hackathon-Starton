import { ethers } from "ethers"

// let provider;

// if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
//   // We are in the browser and metamask is running.

//     let p = new ethers.providers.Web3Provider(window.ethereum);
// } else {
//   // We are on the server *OR* the user is not running metamask
//   provider = new ethers.providers.StaticJsonRpcProvider (
//     "https://data-seed-prebsc-1-s1.binance.org:8545"
// )
// }


const getProvider = async () => {
  let provider;
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      let addressArray = window.ethereum.request({ method: "eth_requestAccounts" });
      const p = new ethers.providers.Web3Provider(window.ethereum);
      let addr = addressArray[0]
      provider = p.getSigner(addr);
      return {provider}
    } catch (e) {
      console.log("error while retrieving signer", e);
      provider = new ethers.providers.StaticJsonRpcProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      )
      return {provider}
    }
  } else {
    console.log("We are on the server *OR* the user is not running metamask");
    provider = new ethers.providers.StaticJsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    )
    return {provider}
  }
}

export default getProvider;