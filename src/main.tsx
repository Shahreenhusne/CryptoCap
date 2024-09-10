import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouteObject, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import "./index.css";
import CrytoDetails from './components/CryptoDetails/CrytoDetails';
 
// Define the routes as RouteObject array
const routes : RouteObject [] = createRoutesFromElements (
   <Route path='/' element={<App/>}>
       <Route index element={<Home />} />
       <Route path='/crypto' element= {<Crypto/>} >
         <Route path=':coinId' element= {<CrytoDetails/>}/>
       </Route>
       
       <Route path='/trending' element= {<Trending/>}>
         <Route path=':coinId' element= {<CrytoDetails/>}/>
       </Route>
       <Route path='/save' element= {<Saved/>} />
   </Route>
)
const router =  createBrowserRouter (routes)



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//path=':coinId' , dynamic path ......
