import { createContext, useContext, ReactNode, useState, useEffect} from "react";
import { useCryptoContext } from "./CryptoCoinContext";
import { Coin } from "../dataType/Cointype";


//create a context object with createContext Api.

interface StorageContextObjType{
    saveBtn: ( coinId : string ) => void;
    allCoins : string [];
    removeBtn : ( coinId : string ) => void;
    saveData : Coin [];
}

export const StorageContextObj = createContext<StorageContextObjType| undefined>(undefined);


//create provider for the children
interface StorageContextProviderType{
    children : ReactNode;
}

export const StorageContextProvider: React.FC <StorageContextProviderType> = ({children}) => {
    const [allCoins, setAllCoins] = useState<string []>([]);
    const [saveData, setSavedDta] = useState<Coin[]>([]) 
    let {currency} = useCryptoContext()
 

    const saveBtn = ( coinId : string ) => {
        const oldCoinsString = localStorage.getItem("coins");
        
        // Check if oldCoinsString is null, if not, parse it into an array
        const oldCoins: string[] = oldCoinsString ? JSON.parse(oldCoinsString) : [];
      
        // If the coinId is already in the array, return null
        if (oldCoins.includes(coinId)) {
          return null;
        } 
        else {
          // Add the new coinId to the array and update localStorage
          const newCoins = [...oldCoins, coinId];
          setAllCoins(newCoins);
          localStorage.setItem("coins", JSON.stringify(newCoins));
        }
      };

    const removeBtn = (coinId: string) => {
        const oldCoinsSring = localStorage.getItem("coins");

        const oldCoins : string[] = oldCoinsSring ? JSON.parse(oldCoinsSring): [];

        const newCoins : string [] = oldCoins.filter(coin => coin !== coinId);
        setAllCoins(newCoins);
        localStorage.setItem("coins", JSON.stringify(newCoins));
    }
    
    const getSavedData = async(totalCoins: string[] = allCoins) => {
        try {
            const options = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
                },
              };
            const data = await fetch( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(",")}&order=market_cap_desc&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
                options
              )
              .then(response  => response.json())
              .then(json => json)
    
              setSavedDta(data);
            //   console.log(data)
                    }
        catch (error)
        {
            console.log(error);
        }
      }
    
  
    useEffect(() => {
        const storedCoins = localStorage.getItem("coins");
        // Check if storedCoins is null before parsing
        if (storedCoins === null) {
          localStorage.setItem("coins", JSON.stringify([]));
        } 
        else {
          const totalCoins = JSON.parse(storedCoins);
          setAllCoins(totalCoins);
          if (totalCoins.length > 0){
            getSavedData(totalCoins);
          }
        }
      }, []);
      
      useEffect(() => {
        if(allCoins.length> 0){
            getSavedData(allCoins);
        }
        else{
            setSavedDta([]);
        }
      },[allCoins])

     
    const StorageProviderValue : StorageContextObjType = {
        saveBtn,
        allCoins,
        removeBtn,
        saveData
    }

 
    return (
        <StorageContextObj.Provider value={StorageProviderValue}>
            {children}
        </StorageContextObj.Provider>
    )
       
}


//Hook to use the Context object :
export const useStorageContext = () : StorageContextObjType => {
    const context = useContext(StorageContextObj);
    if (!context) {
        throw new Error('useCryptoContext must be used within a CryptoProvider');
      }
      return context;
}


//Important Notes ::::::::

// data with JSON.parse(), and the data becomes a JavaScript object. Convert a JavaScript object into a string with