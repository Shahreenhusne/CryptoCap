import { useTrendContext } from "../context/TrendingContext"
import TrendingCoinComponent from "../components/Trending/TrendingComponent";
import { Outlet } from "react-router-dom";

const Trending = () => {

  const { trendData} = useTrendContext();
  return (
    <section className="w-full h-full flex flex-col mt-16 mb-24 relative">
      <div className=" w-full min-h-[60vh] py-8  flex flex-col mobile:flex-row  flex-wrap justify-evenly mt-9  items-center ">
       {trendData && trendData.map((coin)=> 
         <TrendingCoinComponent key={coin.item.id} data={coin.item} />
       )}
      </div>
      <Outlet/>
    </section>
  )
}

export default Trending


//flex-wrap means , flex-elements can be flowed into multiple lines