
import { Search } from './Search';
import Currency from './Currency';
import resetIcon from "../../assets/reset.svg"
import { useCryptoContext } from '../../context/CryptoCoinContext';




const Filter = () => {
  let{ResetFunc } =useCryptoContext();
  return (
  
      <div className="w-[80%] mobile:w-[50%] h-auto  mobile:h-12 border-2 border-border-dimmed rounded relative flex flex-col mobile:flex-row mobile:items-center mobile:justify-between text-white">
        <Search />
        <Currency />
        {/* <Sort /> */}
        <button className='w-[2rem] text-white scale-100 transition-all relative mt-2 mobile:mt-0' onClick={ResetFunc}> 
        <img className="w-full h-full" src={resetIcon} alt='reset'></img>
      </button>
      </div>
 
  
  )
}

export default Filter;