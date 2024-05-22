"use client";
import { NFTCarousel } from "@/components/_global/Home/HeroSection/NFTCarousel";
import { nfts } from "@/components/_global/Home/HeroSection/constant";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import DropDown from "../../components/_global/Staking/DropdownList";
import NFTCarouselStake from "../../components/_global/Staking/NFTCarousel";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { contractAddress, contractAbi } from "../../constant/contract";
import Web3 from "web3";
import WalletConnection from "./WalletConnection";
import { nftAbi } from "@/constant/nftContract";
import Landing from "@/components/home/Landing";
import { toast } from "react-toastify";
import { tokenAbi, LptokenAbi } from "@/constant/tokenContract";
import Images from "@/Assets/index";
import Link from "next/link";
const jsonRpcURL = [
  "https://rpc.pulsechain.com",
  "https://pulsechain-rpc.publicnode.com",
  "https://evex.cloud/pulserpc",
  "https://pulse-s.projectpi.xyz",
  "https://rpc-pulsechain.g4mm4.io",
];

const Stake = () => {
  const web3 = new Web3(window.ethereum as any);
  const [selected, setSelected] = useState(null as any);
  const [buttonValue, getButtonValue] = useState<any>("");
  const [inputValue, setInputValue] = useState<any>("");
  const [value, setValue] = useState("");
  const [contractName, setContractName] = useState("");
  const [NFTContractAddresss, setContractAddress] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [claimLoading, setClaimLoading] = useState<boolean>(false);
  const [lpError, setLpError] = useState(false);
  const [goodTokenError, setGoodTokenError] = useState(false);
  const [goodTokenDetail, setGoodTokenDetails] = useState<any>([]);
  const [goodTokenLoading, setGoodTokenLoading] = useState<boolean>(false);
  const [goodTokenUnstakeLoading, setGoodTokenUnstakeLoading] = useState<any>(
    {}
  );
  const [lpTokenLoading, setLpTokenLoading] = useState<boolean>(false);
  const [lpTokenDetail, setLpTokenDetails] = useState<any>([]);
  const [lpTokenUnstakeLoading, setLpTokenUnstakeLoading] = useState<any>({});
  const [nftTokenLoading, setNftTokenLoading] = useState<boolean>(false);
  const [nftTokenDetails, setNftTokenDetails] = useState<any>([]);
  const [nftTokenUnstakeLoading, setNftTokenUnstakeLoading] = useState<any>({});
  const [lastUpdateTime, setLastUpdateTime] = useState(0);
  const updateRewardIntervalRef = useRef<any>(null);
  const NFTstakingContract = () => {
    const nft_Contract = new web3.eth.Contract(contractAbi, contractAddress);
    return nft_Contract;
  };
  const handleSelected = (value: any) => {
    if (value == "GEHENNAPOWER NFT") {
      setContractName("GEHENNAPOWER NFT");
      setContractAddress("0x54A4E897F636E05A6a5cc35AD5F7b1e55D427E85");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "AMAZONIAPOWER NFT") {
      setContractName("AMAZONIAPOWER NFT");
      setContractAddress("0xB95bA4f865E37F7Cd129454B998a2FFec46a6f2E");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "ANGELOPOWER NFT") {
      setContractName("ANGELOPOWER NFT");
      setContractAddress("0xCD157cfaa00e517e1b0DF0d26A828e4Ececb52a0");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "AQUAPOWER NFT") {
      setContractName("AQUAPOWER NFT");
      setContractAddress("0x72c50A3152d4A804C019E85EcA62B8Ef122FA6C3");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "CATENAPOWER  NFT") {
      setContractName("CATENAPOWER  NFT");
      setContractAddress("0x068F3ac92B0484bead5575233B549BED1bAdA757");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "TERRAPOWER NFT") {
      setContractName("TERRAPOWER NFT");
      setContractAddress("0x34f99ae71df60a9c595f69371639460609f28e50");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "VENTUSPOWER NFT") {
      setContractName("VENTUSPOWER NFT");
      setContractAddress("0x0C2228c6fcdf74b2d18e79683e765b1dB35dFf1D");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "FRACTIONAL ALPHAPOWER NFT") {
      setContractName("FRACTIONAL ALPHAPOWER NFT");
      setContractAddress("0x84b890B0801C0E18E43E3252a35E376Fd3369CDD");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "BLUECARD NFT") {
      setContractName("BLUECARD NFT");
      setContractAddress("0x1DAd42E1eC15d53Fe2B6af7241faa9D9cdD5CB42");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "PULSEPOWER NFT") {
      setContractName("PULSEPOWER NFT");
      setContractAddress("0x6e8A8916302f84110C5D308A9586208a6E892798");
      getButtonValue("NFT");
      setInputValue("NFT Id");
    } else if (value == "LP Token") {
      setContractName("LP Token");
      setContractAddress("0xddBd618A7396BD928Ce0A516dcb1EE0aDd0Dc744");
      getButtonValue("Lp Token");
      setInputValue("Lp Amount ");
    } else if (value == "GOOD Token") {
      setContractName("GOOD Token");
      setContractAddress("0xA89dfb6c48a2776683d1d0e654a988dAA679A76f");
      getButtonValue("Token");
      setInputValue("Token Amount");
    }
  };

  const handleHFT = async () => {
    try {
      const nft_Contract = new web3.eth.Contract(nftAbi, NFTContractAddresss);
      const token_contract = new web3.eth.Contract(
        tokenAbi,
        NFTContractAddresss
      );
      const token_contracts = new web3.eth.Contract(
        LptokenAbi,
        NFTContractAddresss
      );
      const nftStakingContract = NFTstakingContract();
      if (!value || !contractName) {
        setError(true);
        return;
      }
      setLoading(true);
      if (walletAddress) {
        if (contractName == "GEHENNAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("GEHENNAPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "AMAZONIAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("AMAZONIAPOWER NFT stake successfully.");
            }
          }
        } else if (contractName == "ANGELOPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("ANGELOPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "AQUAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("AQUAPOWER NFT stake successfully.");
            }
          }
        } else if (contractName == "CATENAPOWER  NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("CATENAPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "TERRAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("TERRAPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "VENTUSPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("VENTUSPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "FRACTIONAL ALPHAPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("FRACTIONAL ALPHAPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "BLUECARD NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value.toString())
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value.toString())
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("BLUECARD NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "PULSEPOWER NFT") {
          const approveResponse = await nft_Contract.methods
            .approve(contractAddress, value)
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeNFT(NFTContractAddresss, value)
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("PULSEPOWER NFT stake successfully.");
              getNftTokenDetails();
            }
          }
        } else if (contractName == "LP Token") {
          const valueInWei = web3.utils.toWei(value.toString(), "ether");
          let minimunStakeLp = await nftStakingContract.methods
            .minimumStakeLP()
            .call();
          minimunStakeLp = Number(minimunStakeLp) / 1e18;
          if (value < minimunStakeLp) {
            setLpError(true);
            return;
          }
          setLpError(false);
          const approveResponse = await token_contracts.methods
            .approve(contractAddress, valueInWei)
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeLP(valueInWei)
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("LP Token stake successfully.");
              lpTokenDetails();
            }
          }
        } else if (contractName == "GOOD Token") {
          const valueInWei = web3.utils.toWei(value.toString(), "ether");
          let minimunStakeGood = await nftStakingContract.methods
            .minimumStakeGood()
            .call();
          minimunStakeGood = Number(minimunStakeGood) / 1e18;

          if (value < minimunStakeGood) {
            setGoodTokenError(true);
            return;
          }
          setGoodTokenError(false);
          const approveResponse = await token_contract.methods
            .approve(contractAddress, valueInWei)
            .send({
              from: walletAddress,
            });
          if (approveResponse) {
            const stakeNft = await nftStakingContract.methods
              .stakeToken(valueInWei)
              .send({
                from: walletAddress,
              });
            if (stakeNft) {
              setLoading(false);
              toast.success("GOOD Token stake successfully.");
              goodTokenDetails();
            }
          }
        }
      } else {
        setLoading(false);
        toast.error("Please Wallet Connect first.");
      }
    } catch (e: any) {
      setLoading(false);
      toast.error(e);
      console.log("e", e);
    } finally {
      setLoading(false);
    }
  };
  const handleClaim = async () => {
    try {
      setClaimLoading(true);
      const nftStakingContract = NFTstakingContract();
      if (walletAddress) {
        const checkGoodBalance = await nftStakingContract.methods
          .checkGoodBalance()
          .call();
        const checkTotalUserReward = await nftStakingContract.methods
          .checkTotalUserReward(walletAddress)
          .call();
        if (checkTotalUserReward < checkGoodBalance?.availableForReward) {
          const claimRewaird = await nftStakingContract.methods
            .claimRewards()
            .send({ from: walletAddress });
          if (claimRewaird) {
            setClaimLoading(false);
            toast.success("rewards claim successfully.");
          }
        } else {
          setClaimLoading(false);
          toast.error("Available reward insufficient.");
        }
      } else {
        setClaimLoading(false);
        toast.error("Please Wallet Connect first.");
      }
    } catch (err: any) {
      console.log("e", err);
      setClaimLoading(false);
      toast.error(err);
    }
  };
  const getNftTokenDetails = async () => {
    try {
      const array: any = [];
      const nftContract = NFTstakingContract();
      if (walletAddress) {
        setNftTokenLoading(true);
        const getNFTSakes = await nftContract.methods
          .getUserNFTStakes(walletAddress)
          .call();

        if (getNFTSakes.length) {
          await Promise.all(
            getNFTSakes.map(async (element: any) => {
              const Stakedate = new Date(element?.timestamp * 1000);
              const StakedateDateTime = Stakedate?.toLocaleDateString();
              let rewardTime: any = new Date(element?.lastRewardTime * 1000);
              rewardTime = rewardTime?.toLocaleDateString();
              const calculateNFTRewards = await nftContract.methods
                .calculateNFTRewards(
                  element?.nftContract,
                  walletAddress,
                  element?.id
                )
                .call();
              const object = {
                tokenName: element?.name,
                index: element?.id,
                stakeTime: StakedateDateTime,
                lastRewardTime: rewardTime,
                reward: Number(calculateNFTRewards) / 1e18,
                address: element?.nftContract,
              };
              array.push(object);
            })
          );
        }
      }
      setNftTokenDetails(array);
    } catch (e) {
      console.log("e", e);
    } finally {
      setNftTokenLoading(false);
    }
  };
  const handleNFTTokenUnStaked = async (item: any, index: any) => {
    try {
      const nftContract = NFTstakingContract();
      setNftTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [index]: true,
      }));

      const withdrawNFT = await nftContract.methods
        .withdrawNFT(item?.address, item?.index)
        .send({ from: walletAddress });
      if (withdrawNFT) {
        toast.success(`${item?.tokenName} unstake successfully.`);
        getNftTokenDetails();
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setNftTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [index]: false,
      }));
    }
  };
  const goodTokenDetails = async () => {
    try {
      const array: any = [];
      const nftContract = NFTstakingContract();
      if (walletAddress) {
        setGoodTokenLoading(true);
        const getTokenStakes = await nftContract.methods
          .getTokenStakes(walletAddress)
          .call();
        if (getTokenStakes?.length) {
          await Promise.all(
            getTokenStakes?.map(async (element: any, index: any) => {
              let amount: any = Number(element?.tokenAmount) / 1e18;
              amount = amount.toFixed(2);
              const Stakedate = new Date(element?.timestamp * 1000);
              const StakedateDateTime = Stakedate?.toLocaleDateString();
              let rewardTime: any = new Date(element?.lastRewardTime * 1000);
              rewardTime = rewardTime?.toLocaleDateString();
              const calculateTokenStakingRewardsByIndex =
                await nftContract.methods
                  .calculateTokenStakingRewardsByIndex(walletAddress, index)
                  .call();
              const object = {
                tokenName: "Good Token",
                amount: amount,
                stakeTime: StakedateDateTime,
                lastRewardTime: rewardTime,
                reward: Number(calculateTokenStakingRewardsByIndex) / 1e18,
              };
              array.push(object);
            })
          );
        }
      }
      setGoodTokenDetails(array);
    } catch (e: any) {
      console.log("e", e);
    } finally {
      setGoodTokenLoading(false);
    }
  };
  const handleGoodTokenStaked = async (id: any) => {
    try {
      const nftContract = NFTstakingContract();
      setGoodTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [id]: true,
      }));
      const withdrawToken = await nftContract.methods
        .withdrawToken(id)
        .send({ from: walletAddress });
      if (withdrawToken) {
        toast.success("Good Token Unstake Successfully.");
        goodTokenDetails();
        setGoodTokenUnstakeLoading((prevLoadingStates: any) => ({
          ...prevLoadingStates,
          [id]: false,
        }));
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setGoodTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [id]: false,
      }));
    }
  };

  // Lp Token
  const lpTokenDetails = async () => {
    try {
      const array: any = [];
      const nftContract = NFTstakingContract();
      if (walletAddress) {
        setLpTokenLoading(true);
        const getLPStakes = await nftContract.methods
          .getLPStakes(walletAddress)
          .call();
        if (getLPStakes?.length) {
          await Promise.all(
            getLPStakes.map(async (element: any, index: any) => {
              let amount: any = Number(element?.tokenAmount) / 1e18;
              amount = amount.toFixed(2);
              const Stakedate = new Date(element?.timestamp * 1000);
              const StakedateDateTime = Stakedate?.toLocaleDateString();
              let rewardTime: any = new Date(element?.lastRewardTime * 1000);
              rewardTime = rewardTime?.toLocaleDateString();
              const calculateLPStakingRewardsByIndex = await nftContract.methods
                .calculateLPStakingRewardsByIndex(walletAddress, index)
                .call();
              const object = {
                tokenName: "Lp Token",
                amount: amount,
                stakeTime: StakedateDateTime,
                lastRewardTime: rewardTime,
                reward: Number(calculateLPStakingRewardsByIndex) / 1e18,
              };
              array.push(object);
            })
          );
        }
      }
      setLpTokenDetails(array);
    } catch (e: any) {
      console.log("e", e);
    } finally {
      setLpTokenLoading(false);
    }
  };

  const handleLpTokenUnStaked = async (id: any) => {
    try {
      const nftContract = NFTstakingContract();
      setLpTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [id]: true,
      }));
      const withdrawLP = await nftContract.methods
        .withdrawLP(id)
        .send({ from: walletAddress });
      if (withdrawLP) {
        toast.success("Lp Token Unstake Successfully.");
        lpTokenDetails();
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLpTokenUnstakeLoading((prevLoadingStates: any) => ({
        ...prevLoadingStates,
        [id]: false,
      }));
    }
  };

  useEffect(() => {
    getNftTokenDetails();
    goodTokenDetails();
    lpTokenDetails();
    updateRewardIntervalRef.current = setInterval(async () => {
      await goodTokenDetails();
      await getNftTokenDetails();
    }, 60000);
    return () => clearInterval(updateRewardIntervalRef.current);
  }, [walletAddress]);
  return (
    <>
      <div
        style={{
          background: "url(/background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="flex justify-center pt-5">
          <Link href="/">
            <Image src={Images.logo} alt="logo" />
          </Link>
        </div>
        <div className="">
          <div className="container max-w-3xl md:max-w-4xl pb-9">
            <Card className="my-10 p-5 shadow-sm">
              <Card className="flex justify-center items-center">
                <NFTCarouselStake nfts={nfts} />
              </Card>
              <div className="mt-10 mb-5 p-5 space-y-4 flex justify-center items-center flex-col">
                <DropDown selected={selected} onSelect={handleSelected} />
                {error && !contractName && (
                  <span className="text-red-600">PLease select nft/token</span>
                )}

                <Input
                  placeholder={`Enter ${inputValue}`}
                  className=" placeholder-black text-black w-44"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {error && !value ? (
                  <span className="text-red-600">
                    PLease Fill nft/token amount
                  </span>
                ) : lpError ? (
                  <span className="text-red-600">
                    PLease enter minimum 10 amount
                  </span>
                ) : (
                  goodTokenError && (
                    <span className="text-red-600">
                      PLease enter minimum 10 amount
                    </span>
                  )
                )}
                <div className="md:space-x-5 space-y-5 md:space-y-0 w-full flex justify-center items-center flex-col md:flex-row">
                  <Button
                    className="w-full md:w-fit"
                    onClick={handleHFT}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="ms-2">Loading...</span>
                      </>
                    ) : (
                      <>Stake {buttonValue}</>
                    )}
                  </Button>
                  <Button
                    className="w-full md:w-fit"
                    onClick={handleClaim}
                    disabled={claimLoading}
                  >
                    {claimLoading ? (
                      <>
                        <span className="ms-2">Loading...</span>
                      </>
                    ) : (
                      <>Claim</>
                    )}
                  </Button>
                </div>
                <WalletConnection setWalletAddress={setWalletAddress} />
              </div>
            </Card>

            <Card className="p-4 pb-4">
              <Card className=" mt-7">
                <h2 className="text-center font-extrabold  uppercase text-2xl text-[#fdd122] drop-shadow-md mt-4">
                  NFT Staking Details
                </h2>
                <div className="relative overflow-x-auto pt-5">
                  <div className="relative overflow-x-auto pt-5 pb-3">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400 border-b">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                            NFT Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Stake Time
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Last Claim Time
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Reward
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {walletAddress ? (
                          <>
                            {nftTokenLoading ? (
                              <tr className="text-black">
                                <th
                                  scope="row"
                                  className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                  colSpan={7}
                                >
                                  <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 dark:text-blue-200">
                                    loading...
                                  </div>
                                </th>
                              </tr>
                            ) : (
                              <>
                                {nftTokenDetails?.length > 0 ? (
                                  <>
                                    {nftTokenDetails?.map(
                                      (item: any, index: any) => {
                                        return (
                                          <tr
                                            className="text-black border-b"
                                            key={item?.index}
                                          >
                                            <th
                                              scope="row"
                                              className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                              {item?.index}
                                            </th>
                                            <td className="px-6 py-1">
                                              {item?.tokenName}
                                            </td>
                                            <td className="px-6 py-1">
                                              {item?.stakeTime}
                                            </td>
                                            <td className="px-6 py-1">
                                              {item?.lastRewardTime}
                                            </td>
                                            <td className="px-6 py-1">
                                              {item?.reward}
                                            </td>
                                            <td className="px-6 py-1">
                                              <button
                                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-6 px-1 text-xs"
                                                onClick={() =>
                                                  handleNFTTokenUnStaked(
                                                    item,
                                                    index
                                                  )
                                                }
                                                disabled={
                                                  nftTokenUnstakeLoading[index]
                                                }
                                              >
                                                {nftTokenUnstakeLoading[
                                                  index
                                                ] ? (
                                                  <div role="status">
                                                    <svg
                                                      aria-hidden="true"
                                                      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                      viewBox="0 0 100 101"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                      />
                                                      <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                      />
                                                    </svg>
                                                  </div>
                                                ) : (
                                                  "UnStake"
                                                )}
                                              </button>
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </>
                                ) : (
                                  <tr className="text-black">
                                    <th
                                      scope="row"
                                      className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                      colSpan={7}
                                    >
                                      NFT Record Not Found
                                    </th>
                                  </tr>
                                )}
                              </>
                            )}
                          </>
                        ) : (
                          <tr className="text-black">
                            <th
                              scope="row"
                              className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                              colSpan={7}
                            >
                              Connect Wallet
                            </th>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
              <Card className=" mt-7">
                <h3 className="text-center font-extrabold mt-6  uppercase text-2xl text-[#fdd122] drop-shadow-md">
                  LP Token Details
                </h3>
                <div className="relative overflow-x-auto pt-5 pb-3">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400 border-b">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Token Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Token Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Stake Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Last Claim Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Reward
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {walletAddress ? (
                        <>
                          {lpTokenLoading ? (
                            <tr className="text-black">
                              <th
                                scope="row"
                                className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                colSpan={7}
                              >
                                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 dark:text-blue-200">
                                  loading...
                                </div>
                              </th>
                            </tr>
                          ) : (
                            <>
                              {lpTokenDetail?.length > 0 ? (
                                <>
                                  {lpTokenDetail?.map(
                                    (item: any, index: any) => {
                                      return (
                                        <tr
                                          className="text-black border-b"
                                          key={index}
                                        >
                                          <th
                                            scope="row"
                                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            {index}
                                          </th>
                                          <td className="px-6 py-1">
                                            {item?.tokenName}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.amount}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.stakeTime}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.lastRewardTime}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.reward}
                                          </td>
                                          <td className="px-6 py-1">
                                            <button
                                              className="bg-primary text-primary-foreground hover:bg-primary/90 h-6 px-1 text-xs"
                                              onClick={() =>
                                                handleLpTokenUnStaked(index)
                                              }
                                              disabled={
                                                lpTokenUnstakeLoading[index]
                                              }
                                            >
                                              {lpTokenUnstakeLoading[index] ? (
                                                <div role="status">
                                                  <svg
                                                    aria-hidden="true"
                                                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                      fill="currentColor"
                                                    />
                                                    <path
                                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                      fill="currentFill"
                                                    />
                                                  </svg>
                                                </div>
                                              ) : (
                                                "UnStake"
                                              )}
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </>
                              ) : (
                                <tr className="text-black">
                                  <th
                                    scope="row"
                                    className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                    colSpan={7}
                                  >
                                    Lp Token Not Record Found
                                  </th>
                                </tr>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <tr className="text-black">
                          <th
                            scope="row"
                            className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                            colSpan={7}
                          >
                            Connect Wallet
                          </th>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Card className=" mt-7">
                <h3 className="text-center font-extrabold mt-6  uppercase text-2xl text-[#fdd122] drop-shadow-md">
                  Good Token Details
                </h3>
                <div className="relative overflow-x-auto pt-5 pb-3">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400 border-b">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Token Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Token Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Stake Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Last Claim Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Reward
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {walletAddress ? (
                        <>
                          {goodTokenLoading ? (
                            <tr className="text-black">
                              <th
                                scope="row"
                                className="py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                colSpan={7}
                              >
                                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 dark:text-blue-200">
                                  loading...
                                </div>
                              </th>
                            </tr>
                          ) : (
                            <>
                              {goodTokenDetail?.length > 0 ? (
                                <>
                                  {goodTokenDetail?.map(
                                    (item: any, index: any) => {
                                      return (
                                        <tr
                                          className="text-black border-b"
                                          key={index}
                                        >
                                          <th
                                            scope="row"
                                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            {index}
                                          </th>
                                          <td className="px-6 py-1">
                                            {item?.tokenName}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.amount}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.stakeTime}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.lastRewardTime}
                                          </td>
                                          <td className="px-6 py-1">
                                            {item?.reward}
                                          </td>
                                          <td className="px-6 py-1">
                                            <button
                                              className="bg-primary text-primary-foreground hover:bg-primary/90 h-6 px-1 text-xs"
                                              onClick={() =>
                                                handleGoodTokenStaked(index)
                                              }
                                              disabled={
                                                goodTokenUnstakeLoading[index]
                                              }
                                            >
                                              {goodTokenUnstakeLoading[
                                                index
                                              ] ? (
                                                <div role="status">
                                                  <svg
                                                    aria-hidden="true"
                                                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                      fill="currentColor"
                                                    />
                                                    <path
                                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                      fill="currentFill"
                                                    />
                                                  </svg>
                                                </div>
                                              ) : (
                                                "UnStake"
                                              )}
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </>
                              ) : (
                                <tr className="text-black">
                                  <th
                                    scope="row"
                                    className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                                    colSpan={7}
                                  >
                                    Good Token Record Not Found
                                  </th>
                                </tr>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <tr className="text-black">
                          <th
                            scope="row"
                            className="px-6  py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center pt-8 pb-8"
                            colSpan={7}
                          >
                            Connect Wallet
                          </th>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Card>
              {/* <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      NFT
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                      <p className=" text-md">Stake</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      GOOD TOKEN
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                      <p className=" text-md">Stake</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      LP TOKEN
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                      <p className=" text-md">Stake</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      NFT REWARD
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                      <p className=" text-md">Amount: {calculateNFTStakingRewards}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      GOOD TOKEN REWARD
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                    <p className=" text-md">Amount: {calculateTokenStakingRewards}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-2">
                  <div className="h-[150px]">
                    <h3 className="font-bold mb-2 text-md text-[#fdd122]  bg-white rounded-[6px] p-[6px] text-center">
                      LP TOKEN REWARD
                    </h3>
                    <Divider />
                    <div className="flex justify-center items-center h-[70%]">
                    <p className=" text-md">Amount: {calculateLPStakingRewards}</p>
                    </div>
                  </div>
                </Card>
              </div> */}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stake;
