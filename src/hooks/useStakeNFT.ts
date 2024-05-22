import { useState } from 'react';
// import { useWriteContract } from 'wagmi';

// const useStakeNFT = ({ contractAddress, contractAbi }: any) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [transactionHash, setTransactionHash] = useState('');
//   const [error, setError] = useState(null);

//   const stakeNFT = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     setError(null);

//     try {
//       const { data, transactionHash } = await useWriteContract({
//         address: contractAddress,
//         abi: contractAbi,
//         functionName: 'stakeNFT',
//         args: ['0x54A4E897F636E05A6a5cc35AD5F7b1e55D427E85', '1'],
//       });

//       setTransactionHash(transactionHash);
//       return data;
//     } catch (error) {
//       setError(error);
//       setIsError(true);
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { stakeNFT, isLoading, isError, transactionHash, error };
// };

// export default useStakeNFT;
