/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// ./src/js/app.js

import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from "./js/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

// web3 connect
import './styles/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
    connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import {
    injectedWallet,
    ledgerWallet,
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const testnet = {
    id: 97,
    name: 'Bsc Testnet',
    network: 'Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Binance Smart Chain Testnet',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: 'https://bsc-testnet.nodereal.io/v1/4cfcf4b758214e13a3ea8f7be79940e6',
    },
    blockExplorers: {
        default: { name: 'bscscan', url: 'https://testnet.bscscan.com/' },
    },
    testnet: true,
}

const { chains, provider } = configureChains(
    [testnet, chain.polygon, chain.polygonMumbai],
    [
        jsonRpcProvider({
            rpc: (chain) => {
                if (chain.id !== testnet.id) return null
                return { http: testnet.rpcUrls.default }
            },
        }),
        alchemyProvider({ apiKey: "process.env.ALCHEMY_ID "}),
        publicProvider()
    ]
);

/*
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});*/

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            metaMaskWallet({ chains }),
            ledgerWallet({ chains }),
        ],
    },
]);



/*
const { connectors  } = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            metaMaskWallet({ chains }),
        ],
    },
]);

 */

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

ReactDOM.render(
    <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} >
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </BrowserRouter>,
    document.getElementById('root'),
);