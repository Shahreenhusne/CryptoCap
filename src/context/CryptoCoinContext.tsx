//context in react with typescript :

//ReactNode:, is a type that represent anything that can be rendered by React.
import  { SetStateAction, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Coin, SearchResultCoinType } from "../dataType/Cointype";
import { CoinDetailsDataType } from "../dataType/CoinDetailsType";


//context object 

// defined as a type (or interface) and is intended to be used only for type-checking
interface CryptoContextType{   
  cryptoData: Coin[];
  searchData: SearchResultCoinType [];
  currency: string;
  sort: string;
  page: number ; //pagination
  totalPages: number; //pagination
  setCoinSearch: React.Dispatch<React.SetStateAction<string>>; // Type for setCoinSearch prop
  setCurrency : React.Dispatch<SetStateAction<string>>;
  setSortData : React.Dispatch<SetStateAction<string>>;
  setPage: React.Dispatch<SetStateAction<number>>;
  getSearchResult: (query: string) => Promise<void>; // Type signature for the func<tion
  ResetFunc: () => void;
  coinDetailsData : CoinDetailsDataType;
  getCoinDetails: (coinId : string) => Promise<void>


}

// const defaultValue: CryptoContextType = {
//   cryptoData: [],
//   searchData: [],
  
//   getSearchResult: async (query: string) => {
//     // Default placeholder function, does nothing
//     console.log(`getSearchResult called with query: ${query}`);
//   },
// };

export const CryptoContextObj = createContext<CryptoContextType | undefined>(undefined)

//context provider component 
interface CryptoProviderType{
    children: ReactNode
}

//React.FC- React Functional Component , automatically provides type checking and additional functionalities.
export const CryptoProviderComponet: React.FC<CryptoProviderType> = ({children}) => {
  const [cryptoData, setCryptoData] = useState<Coin[]>([]);
  const [ searchData, setSearchData] = useState<SearchResultCoinType[]>([])
  const [coinSearch, setCoinSearch] = useState<string>("")
  const [currency, setCurrency] = useState<string>("usd");
  const [sort, setSortData] = useState<string>("market_cap_desc");
  const [page, setPage] = useState<number>(1);
  const [totalPages , setTotalPages] = useState<number>(260);
  const [coinDetailsData, setCoinDetailsData] = useState <CoinDetailsDataType | null>(null)  //individual coin details page.
  
  

  //Cryto page api
  const getCryptoData = async() => {
   
    try {
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
            },
          };
        const data = await fetch( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sort}&per_page=10&page=${page}`,
            options
          )
          .then(response  => response.json())
          .then(json => json)

          setCryptoData(data);
          // console.log(data)

        const pageData = await fetch ('https://api.coingecko.com/api/v3/coins/list',options)
        .then(response  => response.json())
          .then(json => json)

          setTotalPages(pageData.length);
        //  console.log(pageData)

         

    }
    catch (error)
    {
        console.log(error);
    }
  }

  //for search result api
  const getSearchResult = async(query: string) => {
    try {
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
            },
          };
        const data = await fetch( `https://api.coingecko.com/api/v3/search?query=${query}`,
            options
          )
          .then(response  => response.json())
          .then(json => json)

          setSearchData(data.coins)
        

    }
    catch (error)
    {
        console.log(error);
    }
  }

  //for coin details page 
   const getCoinDetails = async(coinId: string) => {
    try {
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
            },
          };
        const data = await fetch( `https://api.coingecko.com/api/v3/coins/${coinId}`,
            options
          )
          .then(response  => response.json())
          .then(json => json)
            
          setCoinDetailsData(data)
          console.log(data)
        

    }
    catch (error)
    {
        console.log(error);
    }
  }

  const ResetFunc =() => {
    setPage(1);
    setCoinSearch("")
  }  
  // for reset the page to its initial state
  
  useEffect (() => {
    getCryptoData();
  
  }, [coinSearch, currency, sort, page])

  //Because we pass value in the provider, value of CryptoContextType Type.
  const contextValue: CryptoContextType = {
    cryptoData,
    searchData,
    setCoinSearch,
    getSearchResult,
    currency,
    setCurrency,
    sort,
    setSortData,
    page,
    setPage,
    totalPages,
    ResetFunc,
    coinDetailsData,
    getCoinDetails

  };
    return(
        <CryptoContextObj.Provider value={contextValue}>
            {children}
        </CryptoContextObj.Provider>
    )
}

// Hook to use the context
export const useCryptoContext = (): CryptoContextType => {
  const context = useContext(CryptoContextObj);
  if (!context) {
    throw new Error('useCryptoContext must be used within a CryptoProvider');
  }
  return context;
};

//Important Notes ::::::::
//Dispath and SetStateAction use to declare a type of set function used in useState.
//React.FC- React Functional Component , automatically provides type checking and additional functionalities.
//ReactNode : ReactNode describes anything that can be rendered: React elements, strings, numbers, and the special values null or undefined. This makes ReactNode a more inclusive type.