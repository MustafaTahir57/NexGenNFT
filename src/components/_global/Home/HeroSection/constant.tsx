import Images from "@/Assets/index";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export const buttons = [
  {
    id: 1,
    name: "Earn",
    image: Images.earn.src,
    link: "/staking",
  },
  {
    id: 2,
    name: "Invest",
    image: Images.invest.src,
    link: "/comingsoon",
  },
  {
    id: 3,
    name: "Bundle",
    image: Images.bundle.src,
    link: "/comingsoon",
  },
  {
    ide: 4,
    name: "Portal",
    image: Images.portal.src,
    link: "/comingsoon",
  },
  {
    id: 5,
    name: "Swap",
    image: Images.swap.src,
    link: "/comingsoon",
  },
  {
    id: 6,
    name: "Launchpad",
    image: Images.launchpads.src,
    link: "/comingsoon",
  },
];

export const socials = [
  {
    name: "Twitter",
    Icon: (props: any) => <FaTwitter {...props} />,
    link: "https://x.com/PulsePower28?t=m41kfgFamDCms4z5yM1WIg&s=09",
  },
  {
    name: "Telegram",
    Icon: (props: any) => <FaTelegramPlane {...props} />,
    link: "https://t.me/PulsePowerChat",
  },
];
export const nfts = [
  {
    name: "AQUAPOWER NFT",
    url: Images.nft1,
    link: "https://nftgenerator.io/aqua-power",
  },
  {
    name: "PULSEPOWER NFT",
    url: Images.nft2,
    link: "https://nftgenerator.io/pulse-power",
  },
  {
    name: "ANGELOPOWER NFT",
    url: Images.nft3,
    link: "https://nftgenerator.io/angelo-power",
  },
  {
    name: "BLUECARD NFT",
    url: Images.nft4,
    link: "https://nftgenerator.io/bluecard",
  },
  {
    name: "TERRAPOWER  NFT",
    url: Images.nft5,
    link: "https://nftgenerator.io/terra-power",
  },
  {
    name: "VENTUSPOWER  NFT",
    url: Images.nft6,
    link: "https://nftgenerator.io/ventus-power",
  },
  {
    name: "GEHENNAPOWER  NFT",
    url: Images.nft7,
    link: "https://nftgenerator.io/gehenna-power",
  },
  {
    name: "AMAZONIAPOWER  NFT",
    url: Images.nft8,
    link: "https://nftgenerator.io/amazonia-power",
  },

  {
    name: "CATENAPOWER  NFT",
    url: Images.nft10,
    link: "https://nftgenerator.io/catena-power",
  },
  {
    name: "FRACTIONAL ALPHAPOWER NFT",
    url: Images.nft11,
    link: "https://nftgenerator.io/fractionalized-alpha-power",
  },
];
export const stakeNfts = [
  {
    name: "GEHENNAPOWER NFT",
    url: Images.nft7,
    // link: "https://nftgenerator.io/gehenna-power",
    address: "0x54A4E897F636E05A6a5cc35AD5F7b1e55D427E85",
    reward: "5000 $GOOD",
    stake: "GEHENNAPOWER",
  },
  {
    name: "AMAZONIAPOWER NFT",
    url: Images.nft8,
    // link: "https://nftgenerator.io/amazonia-power",
    address: "0xB95bA4f865E37F7Cd129454B998a2FFec46a6f2E",
    reward: "5000 $GOOD",
    stake: "AMAZONIAPOWER",
  },
  {
    name: "ANGELOPOWER NFT",
    url: Images.nft3,
    // link: "https://nftgenerator.io/angelo-power",
    address: "0xCD157cfaa00e517e1b0DF0d26A828e4Ececb52a0",
    reward: "5000 $GOOD",
    stake: "ANGELOPOWER",
  },
  {
    name: "AQUAPOWER NFT",
    url: Images.nft1,
    // link: "https://nftgenerator.io/aqua-power",
    address: "0x72c50A3152d4A804C019E85EcA62B8Ef122FA6C3",
    reward: "5000 $GOOD",
    stake: "AQUAPOWER",
  },
  {
    name: "CATENAPOWER  NFT",
    url: Images.nft10,
    // link: "https://nftgenerator.io/catena-power",
    address: "0x068F3ac92B0484bead5575233B549BED1bAdA757",
    reward: "5000 $GOOD",
    stake: "CATENAPOWER",
  },
  {
    name: "TERRAPOWER NFT",
    url: Images.nft5,
    // link: "https://nftgenerator.io/terra-power",
    address: "0x34f99ae71df60a9c595f69371639460609f28e50",
    reward: "5000 $GOOD",
    stake: "TERRAPOWER",
  },
  {
    name: "VENTUSPOWER NFT",
    url: Images.nft6,
    // link: "https://nftgenerator.io/ventus-power",
    address: "0x0C2228c6fcdf74b2d18e79683e765b1dB35dFf1D",
    reward: "5000 $GOOD",
    stake: "VENTUSPOWER",
  },
  {
    name: "FRACTIONAL ALPHAPOWER NFT",
    url: Images.nft11,
    // link: "https://nftgenerator.io/fractionalized-alpha-power",
    address: "0x84b890B0801C0E18E43E3252a35E376Fd3369CDD",
    reward: "500 $GOOD",
    stake: "FRACTIONAL ALPHAPOWER",
  },
  {
    name: "BLUECARD NFT",
    url: Images.nft4,
    // link: "https://nftgenerator.io/bluecard",
    address: "0x1DAd42E1eC15d53Fe2B6af7241faa9D9cdD5CB42",
    reward: "100 $GOOD ",
    stake: "BLUECARD",
  },

  {
    name: "PULSEPOWER NFT",
    url: Images.nft2,
    // link: "https://nftgenerator.io/pulse-power",
    address: "0x6e8A8916302f84110C5D308A9586208a6E892798",
    reward: "20 $GOOD",
    stake: "PULSEPOWER",
  },

  {
    name: "LP Token",
    url: Images.nft9,
    // link: "",
    address: "0x4c6f55ee4a9ab9266c5c8787af52681b1c6c6e14",
    reward: "50 $GOOD",
    stake: "5000 $GOOD/HOA LP",
  },
  {
    name: "GOOD Token",
    url: Images.good,
    // link: "",
    reward: "10 $GOOD",
    address: "0xA89dfb6c48a2776683d1d0e654a988dAA679A76f",
    stake: "10,000 $GOOD ",
  },
];
