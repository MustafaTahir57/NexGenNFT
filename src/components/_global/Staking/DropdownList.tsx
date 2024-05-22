import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  nfts,
  stakeNfts,
} from "@/components/_global/Home/HeroSection/constant";
import { StaticImageData } from "next/image";

interface SelectedValue {
  name: string;
  url: StaticImageData;
  address: string;
  reward: string;
  stake: string;
}

interface Props {
  selected: SelectedValue | null;
  onSelect: (value: any) => void;
}

export default function DropDown({ selected, onSelect }: Props) {
  const handleSelect = (value: any) => {
    console.log("here...", value);
  };

  return (
    <select
      className="placeholder-black w-44 text-black flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option>Select NFT/Token</option>
      {stakeNfts.map((nft) => (
        <option key={nft.name}>{nft.name}</option>
      ))}
    </select>
  );
}
