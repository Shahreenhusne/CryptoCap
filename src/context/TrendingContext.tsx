import { createContext, useContext, ReactNode, useState, useEffect} from "react";
import { TrendingCoinType } from "../dataType/TrendingCoinType";


//create a context object with createContext Api.
export interface TrendingCoinContextType{
  trendData : TrendingCoinType [];
}

export const TrendingCoinContextObj = createContext<TrendingCoinContextType|undefined>(undefined);


//create provider for the children
interface TrendingCoinProviderType{
    children : ReactNode;
}

export const TrendingCoinProvider: React.FC <TrendingCoinProviderType> = ({children}) => {
    const [trendData, setTrendData] = useState<TrendingCoinType[]>([]);

    const getTrendingData = async () => {
        try {
            const options = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
                },
              };
         const data = await fetch (`https://api.coingecko.com/api/v3/search/trending`, options)
         .then(response => response.json())
         .then(json => json)

         setTrendData(data.coins);
        //  console.log(data.coins);
        }
        catch (error)
    {
        console.log(error);
    }
    }
    useEffect (()=> {
      getTrendingData();
    }, [])

    const TrendContextValue: TrendingCoinContextType = {
        trendData
    }

    return (
        <TrendingCoinContextObj.Provider value={TrendContextValue}>
            {children}
        </TrendingCoinContextObj.Provider>
    )
       
}


//Hook to use the Context object :
export const useTrendContext = () : TrendingCoinContextType => {
    const context = useContext(TrendingCoinContextObj);
    if (!context) {
        throw new Error('useCryptoContext must be used within a CryptoProvider');
      }
      return context;
}


//Important Notes ::::::::