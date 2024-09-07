import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useCryptoContext } from '../../context/CryptoCoinContext';
import { useEffect } from 'react';
import { data } from '../../dataType/CoinDetailsType';
import HighLowIndicator from './HighLowIndicator';

const CryptoDetails = () => {
  let {coinId = ""} = useParams()
  let navigate = useNavigate ()
  const { coinDetailsData, getCoinDetails, currency} = useCryptoContext()
 



  const close = () => {
    navigate("..");
  } 

  useEffect (()=> {
    getCoinDetails(coinId);
  }, [coinId])


  const modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    // Handle the case where the modal root doesn't exist
    return null; // or throw an error, or render a fallback UI
  }

  return ReactDOM.createPortal(
    <div className=' fixed top-0 w-full h-full bg-gray-400 bg-opacity-30 first-letter:backdrop-blur-sm flex items-center justify-center' onClick={close}>
      <div className=' w-[65%] h-[75%] bg-[#272425] bg-opacity-75 rounded-lg text-white' onClick={(e) => e.stopPropagation()}>

      {
        coinDetailsData ? 
        <div className=' w-full h-auto mobile:h-full flex flex-col mobile:flex-row justify-between items-center relative p-4'>
          <div className=' w-full mobile:w-[45%] h-full flex flex-col pr-2'> 
             <div className='flex w-full items-center'>
                <img className=' w-[3rem] h-[3rem] mx-1.5' src={coinDetailsData.image.large}/>
                <h1 className='text-xl capitalize '>{coinDetailsData.name}</h1>
                <span className='text-sm py-0.5 px-2.5 ml-2 bg-opacity-25 rounded uppercase bg-secondary'>{coinDetailsData.symbol}</span>
             </div>
             <div className='flex w-full mt-6'>
                  <div className=' flex flex-col w-full'>
                    <div className=' flex justify-between'>
                      <span className='text-gray-500'>Price</span>
                      <div className={`text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 uppercase ${coinDetailsData.market_data.price_change_percentage_24h > 0 ? 'bg-green-500 text-green-500' : 'bg-red-500 text-red-500'}`}>
                        <span>{Number(coinDetailsData.market_data.price_change_percentage_24h).toFixed(2)}%</span>
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-[1rem] ml-0.5 ${coinDetailsData.market_data.price_change_percentage_24h > 0 ? 'fill-green-500' : 'fill-red-500'}`}><path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z"></path></svg>
                      </div>
                    </div>
                  <h2>
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.current_price[currency as keyof data]
                  )
                  }
                  </h2>
                  </div>
             </div>
             <div className="flex w-full  mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-500">Market Cap</span>
                  <h2 className="text-base font-bold ">
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.market_cap[currency as keyof data]
                  )
                  }
                  </h2>
                </div>
                <div className="flex flex-col sm:mt-0 mt-1">
                  <span className="text-sm capitalize text-gray-500">fully diluted valuation</span>
                  <h2 className="text-base font-bold">
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.fully_diluted_valuation[currency as keyof data]
                  )
                  }
                  </h2>
                </div>
              </div>
              <div className="flex w-full  mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-500">Total Volume</span>
                  <h2 className="text-base font-bold">
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.total_volume[currency as keyof data]
                  )
                  }
                  </h2>
                </div>
              </div>
              <div className='flex w-full mt-4 justify-between'>
                 <HighLowIndicator 
                 currentPrice = { coinDetailsData.market_data.current_price[currency as keyof data]}
                 high = {coinDetailsData.market_data.high_24h[currency as keyof data]}
                 low = {coinDetailsData.market_data.low_24h[currency as keyof data]}
                 />
              </div>
              <div className="flex w-full  mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">Low 24H</span>
                    <h2 className="text-base font-bold">
                    {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.low_24h[currency as keyof data]
                  )
                  }
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">High 24H</span>
                    <h2 className="text-base font-bold">
                    {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.high_24h[currency as keyof data]
                  )
                  }
                    </h2>
                  </div>
              </div>
              <div className="flex w-full  mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-500">max supply</span>
                  <h2 className="text-base font-bold">
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.max_supply
                  )
                  }
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-500">circulating supply</span>
                  <h2 className="text-base font-bold">
                  {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(
                    coinDetailsData.market_data.circulating_supply
                  )
                  }
                  </h2>
                </div>
              </div>
              <div className="flex w-full  mt-4 justify-between sm:flex-row flex-col">
                <div className="flex flex-col">
                  <a href={coinDetailsData.links.homepage[0]} target="_blank" rel="noreferrer" className="text-sm bg-secondary text-gray-100 px-1.5 py-0.5  my-1 rounded">{coinDetailsData.links.homepage[0].substring(0,30)}</a>
                   <a href={coinDetailsData.links.blockchain_site[1]} target="_blank" rel="noreferrer" className="text-sm bg-secondary text-gray-100 px-1.5 py-0.5  my-1 rounded">{coinDetailsData.links.blockchain_site[1].substring(0,30)}</a>
                </div>
                <div className="flex flex-col content-start sm:mt-0 mt-1">
                  <span className="text-sm capitalize text-gray-500">sentiment</span>
                  <div className= "text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 uppercase bg-green-500 text-green-500 ">
                        <span>{Number(coinDetailsData.sentiment_votes_up_percentage).toFixed(2)}%</span>
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 w-[1rem] ml-0.5 fill-green-500"><path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z"></path></svg>
                  </div>
                  <div className="mt-2 text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 uppercase bg-red-500 text-red-500">
                        <span>{Number(coinDetailsData.sentiment_votes_down_percentage).toFixed(2)}%</span>
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1rem] ml-0.5 fill-red-500"><path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z"></path></svg>
                  </div>
                </div>
              </div>
  
          </div>
          <div className=' w-full mobile:w-[65%] h-full flex flex-col mobile:pl-4 mt-2 mobile:mt-0'></div>
        </div>
        : null 
      } 
      </div>
      </div>,
    modalRoot
  );
};

export default CryptoDetails;


//React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. The react-router-dom package has useParams hooks that let you access and use the parameters of the current route as required.



