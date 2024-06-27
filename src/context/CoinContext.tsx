import { createContext, FC, useEffect, useState } from "react";
import { Coin } from "../Cointype";



interface ContextValue {
  allCoin: Coin[];
  currency: { name: string; symbol: string };
  setcurrency: (currency: { name: string; symbol: string }) => void;
}

// Create context
export const CoinContext = createContext<ContextValue | undefined>(undefined);

// Define component props if any (usually none for context providers)
const CoinContextProvider: FC = ({ children }) => {
  const [allCoin, setAllCoin] = useState<Coin[]>([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllCoinApi = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-6xA44ruw9URMYVcgGNFAaWdZ",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllCoinApi();
  }, [currency]);

  const contextValue: ContextValue = {
    allCoin,
    currency,
    setcurrency: setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;

