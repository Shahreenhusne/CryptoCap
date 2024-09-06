import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {CryptoProviderComponet} from "./context/CryptoCoinContext";
import { TrendingCoinProvider } from "./context/TrendingContext";


function App() {
  return (
  
  < CryptoProviderComponet> 
    <TrendingCoinProvider>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </TrendingCoinProvider>
  </CryptoProviderComponet>
 
  )
}

export default App
