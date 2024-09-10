import { Link, useLocation } from "react-router-dom";
import { items} from "../../dataType/TrendingCoinType";


interface TrendingCoinComponentProps {
  data: items; // Explicitly type the data prop
}
const TrendingCoinComponent: React.FC<TrendingCoinComponentProps> = ({ data }) => {
  const location = useLocation(); 
  
  return (
   
      <div className="w-[70%] mobile:w-[40%] bg-[#272425] mb-12 last:mb-0 rounded-lg p-4 cursor-pointer text-white relative">
        {
          data ?
          <>
              <Link to={`${location.pathname}/${data.id}`}  className="cursor-pointer">
                   
                <h3 className=" flex items-center my-0.5">
                  <span className=" capitalize text-gray-100">name:</span>
                  <span className=" text-secondary ml-1">{data.name}</span>
                  <img src={data.small}  alt={data.name} className=" w-[1.5rem] h-[1.5rem] max-1.5 rounded-full ml-1"/>
                </h3>
              
              <h3 className=" flex items-center my-0.5">
                <span className=" capitalize text-gray-100">price (in btc)</span>
                <span className=" text-secondary ml-1"> {new Intl.NumberFormat('en-US', { style: 'currency', currency: "btc" , maximumSignificantDigits: 5,}).format(data.price_btc)}</span>
              </h3>

              <h3 className=" flex items-center my-0.5">
                <span className=" capitalize text-gray-100">market cap rank:</span>
                <span className=" text-secondary ml-1">{data.market_cap_rank}</span>
              </h3>

              <h3 className=" flex items-center my-0.5">
                <span className=" capitalize text-gray-100">Score</span>
                <span className=" text-secondary ml-1">{data.score}</span>
              </h3> 
              <img src={data.small} alt={data.name} className="absolute mobile:top-[25%] top-4  -right-6 -translate-y-2/4  mobile:w-[15%] w-[4rem]   h-auto rounded-full"/>
            </Link> 
            </>
          :
          null
        }
      </div>
    
  )
}

export default TrendingCoinComponent;


//<img src={data.item.small} alt={data.item.name} className="absolute mobile:top-2/4 top-4 mobile:-right-12 -right-6 -translate-y-2/4  mobile:w-[35%] w-[5rem]   h-auto rounded-full"/>

