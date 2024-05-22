import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface INftCarousel {
  nfts: {
    url: StaticImageData;
    link: string,

  }[];
  conWidth: string;
  cardLimitMd: string
  cardLimitLg: string
}
export function NFTCarousel({ nfts, conWidth = 'xl', cardLimitMd = "4", cardLimitLg = '5' }: INftCarousel) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn('w-full ', `max-w-xl`)}
    // className={cn('w-full ', `max-w-xl`)}
    >
      <CarouselContent>
        {nfts.map((_, index) => (
          // <CarouselItem key={index} className={`md:basis-1/3 lg:basis-1/4`}>
          <CarouselItem key={index} className={`md:basis-1/4 lg:basis-1/5`}>
            <div className="p-1 h-full">
              <Card className="h-full">
                <CardContent className="flex  items-center justify-center p-0 overflow-hidden h-full cursor-pointer">
                  <a href={_.link} target="_blank">

                    <Image src={_.url} alt={_.url.src} className="rounded-lg h-full" />
                  </a>
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
