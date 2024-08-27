import React, { useRef } from 'react';
import submitIcon from "../../assets/submit-icon.svg"
import resetIcon from "../../assets/reset.svg"
import { useCryptoContext } from '../../context/CryptoCoinContext';

const Currency = () => {

    let{setCurrency,ResetFunc } =useCryptoContext();
    const currencyRef = useRef(null);

    const handleCurrencySubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCurrency(currencyRef.current.value);
      currencyRef.current.value=""
    }
  return (
    <div className=' flex py-2 mobile:py-0'>
      <form className=' flex items-center relative mr-12' onSubmit={handleCurrencySubmit}>
        {/* <label htmlFor='currency' className=' flex items-center justify-center font-bold text-white'>Currency:</label> */}
        <input className='w-30 rounded-sm font-sans bg-gray-500 required border border-transparent outline-none focus:border-[#ebcdb0] placeholder: text-gray-100 pl-2 ml-2'
        type='text'
        placeholder='currency...'
        ref={currencyRef}/>
       <button type='submit'    className='absolute right-0 cursor-pointer ml-1' >
        <img src={submitIcon} alt="submit" className='w-full h-auto'>
        </img>
       </button>
      </form>
      <button className='w-[2rem] text-white scale-100 transition-all relative' onClick={ResetFunc}> 
        <img className="w-full h-full"src={resetIcon} alt='reset'></img>
      </button>
    </div>
  )
}

export default Currency