import React, { useEffect, useState } from 'react';
import { formatUnits } from 'viem';
// import { Address, erc20ABI, readContracts, useAccount } from 'wagmi';

interface ReturnProps {
    balance: bigint;
    decimals: number;
    symbol: string;
    name: string;
    totalSupply: bigint
}

const useTokenInformation = (tokenAddress: any, userAddress: any) => {
    // const address = userAddress
    // const [tokenInfo, setTokenInfo] = useState<ReturnProps>({
    //     balance: 0n,
    //     decimals: 0,
    //     symbol: '',
    //     name: '',
    //     totalSupply: 0n
    // });

    // useEffect(() => {
    //     async function getTokenInfo() {

    //         try {
    //             const [{ result: symbol }, { result: decimals }, { result: balance }, { result: name }, { result: totalSupply }] = await readContracts({
    //                 contracts: [
    //                     { address: tokenAddress, abi: erc20ABI, functionName: 'symbol' },
    //                     { address: tokenAddress, abi: erc20ABI, functionName: 'decimals' },
    //                     {
    //                         address: tokenAddress,
    //                         abi: erc20ABI,
    //                         functionName: 'balanceOf',
    //                         args: [address as Address],
    //                     },
    //                     { address: tokenAddress, abi: erc20ABI, functionName: 'name' },
    //                     { address: tokenAddress, abi: erc20ABI, functionName: 'totalSupply' },

    //                 ],
    //             });

    //             const updatedTokenInfo: ReturnProps = {
    //                 symbol: symbol as string,
    //                 decimals: decimals as number,
    //                 balance: balance as bigint,
    //                 name: name as string,
    //                 totalSupply: totalSupply as bigint
    //             };

    //             setTokenInfo(updatedTokenInfo);
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }

    //     getTokenInfo();
    // }, [tokenAddress, address]);

    // return tokenInfo;
};

export default useTokenInformation;
