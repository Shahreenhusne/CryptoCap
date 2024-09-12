
import { Link, useLocation } from "react-router-dom";
import {  useCryptoContext } from "../../context/CryptoCoinContext"
import Pagination from "../Pagination/Pagination";
import Savebtn from "./Savebtn";



const Table = () => {

  const location = useLocation(); // Get the current location
  let {cryptoData, currency} = useCryptoContext();

  return (
    <>
    <div className="hidden mobile:flex flex-col mt-9 border border-border-dimmed w-[80%] text-white text-sm rounded">
      {cryptoData ? 
      <table className="border-2 border-border-dimmed w-full table-fixed ">
          <thead className="text-base border-b border-[#ebcdb0]">
            <tr>
                <th className="p-4 ">Asset</th>
                <th className="p-4 ">Name</th>
                <th className="p-4 ">Low Price 24H</th>
                <th className="p-4 ">High Price 24h</th>
                <th className="p-4 ">Total volume</th>
                <th className="p-4 ">Market cap change</th>
                <th className="p-4 ">Market cap rank</th>
                <th className="p-4 ">24H</th>
            </tr>
          </thead>
          <tbody>
           {
            cryptoData.map( data => 
            {
              return(
                <tr key={data.id} className="hover:scale-100  text-center  border-b border-[#ebcdb0] hover:bg-[#70ac97] last:border-b-0">
                <td className=" py-4 flex items-center uppercase">
                   <Savebtn data={data}/>
                  <img className="w-[1.2rem] h-[1.2rem] mx-1.5" src={data.image} alt={data.name}></img>
                  <Link to={`${location.pathname}/${data.id}`}  className="cursor-pointer">
                  {data.symbol}
                  </Link>
                </td>
                <td>
                <Link to={`${location.pathname}/${data.id}`}  className="cursor-pointer">
                {data.name}
                </Link>
                </td>
                <td>{
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(
                    data.low_24h
                  )
                  }</td>
                <td>{
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(
                    data.high_24h

                  )
                  }</td>
                <td className="py-4 ">{data.total_volume}</td>
                <td className="py-4 ">{Number(data.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td className=" py-4"> {data.market_cap_rank}</td>
                <td className={data.price_change_percentage_24h  > 0 ? " text-green-500 py-4" : " text-red-500 py-4" }>{Number(data.price_change_percentage_24h).toFixed(2)}%</td>

            </tr>
              )
            }
            )
           }
          </tbody>
       </table>
        : null}
    </div>
    <div className="flex flex-col mt-9 border border-border-dimmed  w-full  text-white text-sm rounded mobile:hidden">
        {cryptoData ? 
        <table className="w-full table-fixed">
            <thead className="text-base border-b border-[#ebcdb0]">
              <tr>
                  <th className="py-4">Asset</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">24H</th>
              </tr>
            </thead>
            <tbody>
             {
              cryptoData.map( data => 
              {
                return(
                  <tr key={data.id} className=" hover:scale-100 cursor-pointer text-center  border-b border-[#ebcdb0] hover:bg-[#70ac97] last:border-b-0">
                  <td className=" py-4 flex items-center uppercase">
                    <Savebtn data={data}/>
                    <img className="w-[1.2rem] h-[1.2rem] mx-1.5" src={data.image} alt={data.name}></img>
                      <Link to={`${location.pathname}/${data.id}`}  className="cursor-pointer">
                        {data.symbol}
                        </Link>
                  </td>
                  <td>
                  <Link to={`${location.pathname}/${data.id}`}  className="cursor-pointer">
                  {data.name}
                  </Link>
                  </td>
                  <td>{
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(
                      data.current_price
                    )
                    }</td>
                  <td className={data.price_change_percentage_24h  > 0 ? " text-green-500 py-4" : " text-red-500 py-4" }>{Number(data.price_change_percentage_24h).toFixed(2)}%</td>
  
              </tr>
                )
              }
              )
             }
            </tbody>
         </table>
          : null}
    </div>
    <div className="flex items-center justify-between mt-4 w-full mobile:w-[80%] capitalize h-[2rem] text-white">
      <span>
        Data Provided By
        <a  className="text-secondary pl-0.5" href="https://www.coingecko.com/" target={"_blank"}>
          CoinGecko
        </a>
      </span>
      <Pagination/>
    </div>
    </>
  )
}

export default Table


//The Number() method converts a value to a number.
//toFixed(), method converts a number to a string and rounds the string to a specified number of decimals

//intl is a browserapi 

