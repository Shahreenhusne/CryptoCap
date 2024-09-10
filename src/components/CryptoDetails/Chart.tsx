
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend , ResponsiveContainer, TooltipProps } from 'recharts';
import { useCryptoContext } from "../../context/CryptoCoinContext";

interface chartType{
    id: string
}
interface chartData {
  date : string;
  [key : string]: number | string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  currency : string
}

function CustomTooltip({ payload, label, active, currency }: CustomTooltipProps) {
  if (active && payload && payload.length > 0) {
    const value = payload[0]?.value;

    // Check if value is a number before formatting
    if (typeof value === 'number') {
      return (
        <div className="custom-tooltip">
          <p className="label text-sm text-secondary">
            {`${label} : ${new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value)}`}
          </p>
        </div>
      );
    }
  }

  return null;
}



const Chart : React.FC <chartType>= ({id}) => {
 
 const [chartData, setChartData] = useState<chartData [] | undefined>(undefined) ;
 const [type, setType]=useState<string>("prices")
 const [days, setDays] =useState<number>(7)

 let {currency } = useCryptoContext ()

  useEffect( () => {
       const getChatData =  async (id: string) => {
         
        try {
            const options = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
                },
              };
            const data = await fetch (`
                        https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
                        options
                        ).then (response => response.json())
                        .then(json => json)

          // console.log("chart data", data)
           let convertedData = data[type].map ( (item: [number, number])  => {
            return {
              date: new Date(item[0]).toLocaleDateString(),
              [type]: item[1]
            }
           }
           )

           setChartData(convertedData);
          //  console.log(convertedData)
       }
       catch (error){
        console.log(error);
       }
    }

    getChatData(id);
        
  },[id, type, days])  
  return (
    <div className=" w-full h-[80%]">
        <ResponsiveContainer height={"90%"}>
            <LineChart width={400} height={400} data={chartData}>
                <Line type="monotone" dataKey={type} stroke="#94aea5" strokeWidth={"1px"} />
                <CartesianGrid stroke="#6b7280" />
                <XAxis dataKey="date" hide />
                <YAxis dataKey={type} hide domain={["auto", "auto"]} />
               <Tooltip content={<CustomTooltip  currency= {currency}/>} cursor={false} wrapperStyle={{outline: "none"}}/>
               <Legend/>
          </LineChart>
        </ResponsiveContainer>
        <div>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2 rounded-sm  capitalize bg-opacity-25 ${type == "prices" ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`} onClick={() => setType("prices")}>Prices</button>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2 rounded-sm capitalize bg-opacity-25 ${type == "market_caps" ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`}onClick={() => setType("market_caps")}>Market Cap</button>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2  rounded-sm capitalize bg-opacity-25 ${type == "total_volumes" ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`} onClick={() => setType("total_volumes")}>Total Volume</button>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2 rounded-sm capitalize bg-opacity-25 ${days == 7 ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`} onClick={() => setDays(7)}>7D</button>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2 rounded-sm capitalize bg-opacity-25  ${days == 14 ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`} onClick={() => setDays(14)}>14D</button>
          <button className={`mt-1 mobile:mt-0 text-sm py-0.5 px-1.5 ml-2 rounded-sm capitalize bg-opacity-25 ${days == 30 ? "bg-secondary text-white" : "bg-gray-600 text-gray-100"}`} onClick={() => setDays(30)}>30D</button>
        </div>
    </div>
  )
}

export default Chart




// interface chartDataType{
//   "prices" : [number, number] [],
//   "market_caps": [number, number] [],
//   "total_volumes": [number, number] []
// }

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 100, pv: 2400, amt: 2400}];



// datakey of  <Line> in chart has to be same as object key which you want to show.

// https://recharts.org