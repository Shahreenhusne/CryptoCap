import React, { useState, ChangeEvent, useMemo, FormHTMLAttributes} from 'react'
import debounce from 'lodash.debounce';
import searchicon from "../../assets/search-icon.svg"
import { useCryptoContext } from '../../context/CryptoCoinContext'



export const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const { getSearchResult,searchData, setCoinSearch} = useCryptoContext ();
 
  
  const debouncedSearch = useMemo(
   () =>
     debounce((query: string) => {
       getSearchResult(query);
     }, 1000),
   [getSearchResult]
 ); 

 const selectCoin = (coin: string) => {
    setCoinSearch(coin);
    setSearchInput('');
  
 }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
     e.preventDefault();
     let query = e.target.value;
     setSearchInput(query);
     if (e.nativeEvent instanceof InputEvent && (e.nativeEvent.inputType === 'deleteContentBackward' || e.nativeEvent.inputType === 'deleteContentForward')) {
      return; // Skip debounce function when backspace or delete is pressed
    }
     debouncedSearch(query);  
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debouncedSearch(searchInput);
  };  
return (
      <>
         <form className='w-full mobile:w-96 mt-1 mobile:mt-0 flex items-center relative px-1 mobile:ml-4 font-mono' onSubmit={handleSubmit}>
            <input name='search' type='text'
            onChange={handleInputChange}
            value={searchInput}
            placeholder='search here......'
            className=' w-full rounded-sm font-sans bg-gray-500 required border border-transparent outline-none focus:border-[#ebcdb0] placeholder: text-gray-100 pl-2'/>
            <button type="submit" className='absolute right-1 cursor-pointer'>
            <img src={searchicon} alt='search' className='w-full h-auto'/>
            </button>
         </form>
         {
          searchInput.length > 0 ? 
          <ul className='w-96 h-96 rounded-lg absolute left-5  top-14 overflow-x-hidden bg-[#70ac97] bg-opacity-100 border border-[#ebcdb0]'>
            {
              (searchData.length != 0)  ? 
              searchData.map (
                coin => {
                  return (
                    <li key={coin.id}  onClick={() => selectCoin(coin.id)}   className=' ml-4 my-2 flex items-center cursor-pointer'>
                      <img className=' w-[1rem] h-[1rem] mx-1.5' src={coin.thumb} alt={coin.name}/>
                      <span>{coin.name}</span>
                    </li>
                  )
                }

              )
              :
             <div className=" w-full h-full flex justify-center items-center">
               <div className=' w-8 h-8 border-4 border-[#ebcdb0] rounded-full  border-b-white animate-spin' role='status'/>
               <span className=' ml-1 text-[#ebcdb0]'>
                 Searching......
               </span>
             </div>
            }
          </ul>
          :
           null
         }
      </>
        
  )
}


//You need to specify the correct event type for the e parameter. For an input change event in React with typescript, the correct type is React.ChangeEvent<HTMLInputElement>.

// debouncedSearch function is used so that the api do not get called on every character input from the user. 