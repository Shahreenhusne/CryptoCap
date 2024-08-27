import React from 'react';
import selectIcon from "../../assets/select-icon.svg"

import { useCryptoContext } from '../../context/CryptoCoinContext';

const Sort = () => {

  const { setSortData} = useCryptoContext();
  const handlesortClick = (e: React.MouseEvent<HTMLSelectElement>) => {
    const selectedValue = (e.target as HTMLSelectElement).value;
    setSortData(selectedValue);
  };
  
    
    return (
    <div className=' flex mr-7'>
      <label className=' relative flex justify-center items-center'>
         <span className=' text-cyan-200 font-bold mr-2'>Sort by:</span>
         <select name="sortBy" className=' rounded pl-2 pr-10 py-1 leading-4 capitalize bg-gray-500 focus:outline-none'
         onClick={handlesortClick}>
            <option  value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market capa asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="id_desc">id desc</option>
            <option value="id_asc">id asc</option>
            <option value="gecko_desc">gecko_desc</option>
            <option value="gecko_asc">gecko asc</option>
         </select>
         <img src={selectIcon} alt="select" className='w-[1rem] h-auto absolute right-0 pointer-events-none'>
         </img>
      </label>
    </div>
  )
}

export default Sort

//.pointer-events-none { no events only for show
// pointer-events: none;
//}