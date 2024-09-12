import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {CryptoProviderComponet} from "./context/CryptoCoinContext";
import { TrendingCoinProvider } from "./context/TrendingContext";
import { StorageContextProvider } from "./context/StorageContext";


function App() {
  return (
  
  < CryptoProviderComponet> 
    <TrendingCoinProvider>
      <StorageContextProvider>
        <Header/>
        <Outlet/>
      </StorageContextProvider> 
    </TrendingCoinProvider>
  </CryptoProviderComponet>
 
  )
}

export default App
