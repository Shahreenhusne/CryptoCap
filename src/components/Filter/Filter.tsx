import React from 'react';
import { Search } from './Search';
import Currency from './Currency';
import Sort from './Sort';



const Filter = () => {
  return (
  
      <div className="w-[50%] h-auto  mobile:h-12 border-2 border-border-dimmed rounded relative flex flex-col mobile:flex-row mobile:items-center justify-between text-white">
        <Search />
        <Currency />
        {/* <Sort /> */}
      </div>
 
  
  )
}

export default Filter;