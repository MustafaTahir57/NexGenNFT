import React, { useEffect } from 'react'
import {
    useWeb3ModalAccount,
    createWeb3Modal,
    defaultConfig,
  } from "@web3modal/ethers/react";

  const projectId = "57c3ed3f7633af987eda789d503edfee";
const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  {
    chainId: 42161,
    name: "Arbitrum",
    currency: "ETH",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
  },
  {
    chainId: 369,
    name: "PulseChain",
    currency: "PLS",
    explorerUrl: "https://scan.pulsechain.com",
    rpcUrl: "https://rpc.pulsechain.com",
  },
];

const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
//   themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#0f172a",
    '--w3m-color-mix': '#fff',
  }
});
const WalletConnection = ({setWalletAddress} : any) => {
    const { address } = useWeb3ModalAccount();

    useEffect(()=>{
      setWalletAddress(address)
    }, [address])
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', borderRadius: '25px' }}>
    <w3m-button></w3m-button>
</div>
  )
}

export default WalletConnection