'use client';

import {
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, holesky, polygonAmoy, avalancheFuji } from 'wagmi/chains';


const projectId = 'YOUR_PROJECT_ID';

const connectors = connectorsForWallets(
    [
    {
        groupName: 'Suggested',
            wallets: [
                rainbowWallet,
                metaMaskWallet,
                coinbaseWallet,
                walletConnectWallet,
            ],
        },
    {
        groupName: 'Other',
        wallets: [
            argentWallet, 
            trustWallet, 
            ledgerWallet
        ],
      },
    ],
    {
      appName: 'My RainbowKit App',
      projectId: projectId,
    }
  );

const config = createConfig({
    connectors,
    chains: [mainnet, sepolia, holesky, polygonAmoy, avalancheFuji], 
    transports: { 
        [mainnet.id]: http(), 
        [sepolia.id]: http(), 
        [holesky.id]: http(), 
        [polygonAmoy.id]: http(), 
        [avalancheFuji.id]: http(), 
    }, 
});

export default config;