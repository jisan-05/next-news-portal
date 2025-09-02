import Image from "next/image";
import { Button } from "../ui/button";

import bannerImg from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="px-4 py-8 lg:px-8  grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image  */}
        <div>
          <Image src={bannerImg} alt="banner" />
        </div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-semibold">
            OpenAi Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p>
            OpenAI monthly revenue hit us$300 million in agust , up 1700% since
            the beginning of 2023, and the company expects about $3.7 billion in
            annual sales this year, according to financial documents reviewed by
            The New York Times.
            <br />
            <br />
            openAI estimates that its revenue will ballon to copy 1.6 billion
            next year. Open AI revenue in August more than tripled from a year
            earlier, according to the documents, and about 350 million people -
            up from around 100 million in march of this year - used its services
            each month as of June
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
