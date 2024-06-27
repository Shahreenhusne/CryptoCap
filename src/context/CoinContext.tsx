import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();
 

const CoinContextProvider = () => 
{
    const [allCoin, setAllCoin] = useState([])
    const [currency, setcurrency] = useState(
        {
            name: "usd",
            symbol: "$"
        }
    )

    const fetchALLCoinApi = async () => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
          },
        };

        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
          options
        )
          .then((response) => response.json())
          .then((response) => setAllCoin(response))
          .catch((err) => console.error(err));
    }

    useEffect(() => {
        fetchALLCoinApi();
    } , [currency])
 
    const contextValue = {
        allCoin,
        currency,
        setcurrency

    }
    return <CoinContext.Provider value={contextValue}></CoinContext.Provider>;
}

export default CoinContextProvider;
