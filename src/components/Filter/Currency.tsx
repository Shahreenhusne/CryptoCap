import React, { useRef } from 'react';
import submitIcon from "../../assets/submit-icon.svg"
import { useCryptoContext } from '../../context/CryptoCoinContext';

const Currency = () => {

    let{setCurrency } =useCryptoContext();
    const currencyRef = useRef<HTMLInputElement>(document.createElement("input"));

    const handleCurrencySubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCurrency(currencyRef.current.value);
      currencyRef.current.value=""
    }
  return (

      <form className='w-full mobile:w-[30%] mt-2 mobile:mt-0 flex items-center relative mr-12 font-mono px-1' onSubmit={handleCurrencySubmit}>
        {/* <label htmlFor='currency' className=' flex items-center justify-center font-bold text-white'>Currency:</label> */}
        <input className='w-full  rounded-sm font-sans bg-gray-500 required border border-transparent outline-none focus:border-[#ebcdb0] placeholder: text-gray-100 pl-2'
        type='text'
        placeholder='currency...'
        ref={currencyRef}/>
       <button type='submit'    className='absolute right-0 cursor-pointer mr-1' >
        <img src={submitIcon} alt="submit" className='w-full h-auto'>
        </img>
       </button>
      </form>
     
  )
}

export default Currency


//const currencyRef = useRef<HTMLInputElement>(document.createElement("input")); --- explicit about the type:
