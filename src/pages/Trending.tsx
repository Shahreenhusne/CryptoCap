import { useTrendContext } from "../context/TrendingContext"
import TrendingCoinComponent from "../components/Trending/TrendingComponent";
import { Outlet } from "react-router-dom";
import resetIcon from "../assets/reset.svg"

const Trending = () => {

  const { trendData, ResetFunc} = useTrendContext();
  return (
    <section className="w-full h-full flex flex-col mt-16 mb-24 relative">
      <div className=" w-full min-h-[60vh] py-8  flex flex-col mobile:flex-row  flex-wrap justify-evenly mt-9  items-center ">
       {trendData && trendData.map((coin)=> 
         <TrendingCoinComponent key={coin.item.id} data={coin.item} />
       )}
       <button className="w-[2rem] mobile:w-[3rem] ml-4 hover:scale-110 transition-all  absolute top-0 right-9 bg-[#272425] rounded-full" onClick={ResetFunc}>
        <img className="w-full h-full" src={resetIcon} alt='reset'></img>
       </button>
      </div>
      <Outlet/>
    </section>
  )
}

export default Trending


//flex-wrap means , flex-elements can be flowed into multiple lines