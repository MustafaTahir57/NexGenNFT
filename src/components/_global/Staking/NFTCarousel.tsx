import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { stakeNfts } from "../Home/HeroSection/constant";

interface INftCarousel {
  nfts: {
    url: StaticImageData;
    link: string;
  }[];
}
export default function NFTCarouselStake({ nfts }: INftCarousel) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn("w-full ", `max-w-xl`)}
      // className={cn('w-full ', `max-w-xl`)}
    >
      <CarouselContent>
        {stakeNfts.map((_, index) => (
          // <CarouselItem key={index} className={`md:basis-1/3 lg:basis-1/4`}>
          <React.Fragment key={index}>
            <CarouselItem className={`md:basis-1/3 lg:basis-1/3`}>
              <p className="font-semibold text-sm mt-2 text-center">{_.name}</p>
              <div className="p-1 h-full">
                <Card className="h-fit md:h-[15rem] ">
                  <CardContent className="flex  items-center justify-center p-0 overflow-hidden h-fit md:h-[15rem]  cursor-pointer">
                    {/* <a href={_.link} target="_blank"> */}

                    <Image
                      src={_.url}
                      alt={_.url.src}
                      className="rounded-lg h-full"
                    />
                    {/* </a> */}
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  </CardContent>
                </Card>
                <p className="font-semibold text-[10px] mt-2 text-center">{`Stake: ${_.stake} `}</p>
                <p className="font-semibold text-[10px]  text-center">{`Earn ${_.reward}`}</p>
              </div>
            </CarouselItem>
          </React.Fragment>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
