import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";
import Image from "next/image";

const  Home = async() => {
  const data = await fetch('http://localhost:5000/api/news')
  const news = await data.json()
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            news.slice(0,3).map((item:NewsItem)=><NewsCard key={item?._id} item={item}></NewsCard>)
          }
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
}
export default Home;