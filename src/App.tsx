import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {CryptoProviderComponet} from "./context/CryptoCoinContext";


function App() {
  return (
  
  < CryptoProviderComponet> 
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
  </CryptoProviderComponet>
 
  )
}

export default App
