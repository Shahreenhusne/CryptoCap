import React, { useState } from 'react'
import paginationIcon from "../../assets/pagination-arrow.svg"
import { useCryptoContext } from '../../context/CryptoCoinContext';

const Pagination = () => {

  let {page, setPage, totalPages} = useCryptoContext(); 
  const TotalNumber = Math.ceil(totalPages/10);

    
  const  next = () => {
      if (page === TotalNumber){
        return null;
      }
      else{
        setPage(page + 1);
      }
  }

  const  prev = () => {
    if (page === 1){
      return null;
    }
    else{
      setPage(page - 1);
    }
}
const multiStepNext = () => {
  if (page+3 >= TotalNumber){
    setPage(TotalNumber -1);
  }
  else{
    setPage(page + 3);
  }
}

const multiStepPrev = () => {
  if (page-3 <= 1){
    setPage(TotalNumber+1);
  }
  else{
    setPage(page - 3);
  }
}



  return (
    <div className=' flex items-center'>
      <ul className=' flex items-center justify-end text-sm'>
         <li className=' flex items-center'>
           <button className=' outline-none w-8' onClick={prev}>
            <img className=' w-full h-auto rotate-180' src={paginationIcon} alt='pagination-left'></img>
           </button>
         </li>
        {
          page - 1 === TotalNumber ||  page === TotalNumber ?
          (
            <li className=' outline-none  rounded-full w-10 h-10 flex items-center justify-center text-sm hover:text-secondary'>
            <button onClick={ multiStepPrev} className=' outline-none w-8'> ...
            </button>
          </li>
          ):
          null
        }
        {
          page - 1 !== 0 ? 
          (
            <li className=' outline-none  rounded-full w-10 h-10 flex items-center justify-center text-sm hover:bg-secondary bg-gray-500 mx-1.5'>
            <button onClick={prev} className=' outline-none w-8'> {page - 1}
            </button>
          </li>
          ) :
          null 
        }
         <li className='outline-none  rounded-full w-10 h-10 flex items-center justify-center text-sm bg-secondary  mx-1.5'>
           <button disabled className=' outline-none w-8'> {page}
           </button>
         </li>
       {
         page + 1 !== TotalNumber && page !== TotalNumber ? 
         (
          <li className=' outline-none  rounded-full w-10 h-10 flex items-center justify-center text-sm hover:bg-secondary bg-gray-500 mx-1.5'>
          <button onClick={next}   className=' outline-none w-8'> {page + 1}
          </button>
        </li>
         ) : null 
       }
        {
          page + 1 !== TotalNumber && page !== TotalNumber ? 
          (
            <li className=' outline-none  rounded-full w-10 h-10 flex items-center justify-center text-sm hover:text-secondary'>
            <button onClick={multiStepNext} className=' outline-none w-8'> ...
            </button>
          </li>
          ) :
          null
        }
        {
          page !== TotalNumber ? (
            <li className=' outline-none  rounded-full w-10 h-10 flex items-center justify-center text-xs hover:bg-secondary bg-gray-500 mx-1.5'>
            <button onClick={  () =>  setPage(TotalNumber)}className=' outline-none w-8'> {TotalNumber}
            </button>
          </li>
          ) : null
        }
         <li className=' flex items-center'>
           <button className=' outline-none w-8' onClick={next}>
            <img className=' w-full h-auto' src={paginationIcon} alt='pagination-right'></img>
           </button>
         </li>

      </ul>
    </div>
  )
}

export default Pagination


// TotalNumber , got this number 14627 from fetching https://api.coingecko.com/api/v3/coins/list , data.length.