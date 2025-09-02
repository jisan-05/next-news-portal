import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${item?._id}`}>
        <Image
          src={item?.imageUrl}
          width={500}
          height={500}
          alt="News Image"
          priority
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>
      <div>
        <h2 className="text-xl font-semibold my-3">{item.title.substring(0.64)}...</h2>
        <p>{item.description.substring(0,100)}...</p>
        <Link  href={`/news/${item?._id}`}>
            <Button variant="default">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
