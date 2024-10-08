import React, { useEffect, useState } from 'react'

interface HighLowType {
    currentPrice: number ;
    high : number ;
    low : number
}

const HighLowIndicator : React.FC <HighLowType> = ({currentPrice , high , low }) => {

  const [green, setGreen] = useState<number>(0);

  useEffect ( () => {
    let total = high - low ;
    let greenZone = (high -currentPrice)*100 / total
    setGreen (Math.ceil(greenZone))
  }, [currentPrice , high , low])
  return (
    <>
      <span className='bg-red-500 h-1.5 rounded-l-lg w-[50%]' style={{width:`${100-green}%`}}>&nbsp;</span>
      <span className='bg-green-500 h-1.5 rounded-r-lg w-[50%]'style={{width:`${green}%`}}>&nbsp;</span>
      </>
  )
}

export default HighLowIndicator