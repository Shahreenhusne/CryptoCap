import { Link, Outlet, useLocation } from "react-router-dom"
import Savebtn from "../components/Table/Savebtn"
import { useStorageContext } from "../context/StorageContext"
import { useCryptoContext } from "../context/CryptoCoinContext"


const Saved = () => {
  
  const location = useLocation();
   let {saveData} =useStorageContext ()
   let {currency} =useCryptoContext ()

   console.log(location.pathname)

  
 
  return (
    <section className="w-full h-full flex flex-col mt-16 mb-24 relative items-center">
       <div className="w-full min-h-[60vh] py-8 flex flex-col mobile:flex-row flex-wrap justify-evenly mt-9 items-center">
    {saveData && saveData.length > 0 ? 
    <>
    <table className="mobile:hidden w-[80%] table-fixed text-white border-4 border-secondary bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-md">
      <thead className="text-base border-b border-[#ebcdb0]">
        <tr>
          <th className="py-4">Asset</th>
          <th className="py-4">Name</th>
          <th className="py-4">Price</th>
        </tr>
      </thead>
      <tbody>
        {saveData.map(data => {
          return (
            <tr key={data.id} className="hover:scale-100 cursor-pointer text-center border-b border-[#ebcdb0] hover:bg-[#70ac97] last:border-b-0">
              <td className="py-4 flex items-center uppercase">
                <Savebtn data={data}/>
                <img className="w-[1.2rem] h-[1.2rem] mx-1.5" src={data.image} alt={data.name} />
                <Link to={`${location.pathname}/${data.id}`} className="cursor-pointer">
                  {data.symbol}
                </Link>
              </td>
              <td>
                <Link to={`${location.pathname}/${data.id}`} className="cursor-pointer">
                  {data.name}
                </Link>
              </td>
              <td>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(
                  data.current_price
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <table className="hidden mobile:block border-2 border-border-dimmed table-fixed text-white">
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
            saveData.map( data => 
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
    </> 
    : 
    <h2 className="text-xl mobile:text-2xl text-secondary font-bold text-center" >No Data To Display</h2>
     }
</div>

   <Outlet/>
    </section>
  )
}

export default Saved