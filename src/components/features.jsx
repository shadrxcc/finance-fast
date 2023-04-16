import React from 'react'
import International from './international'
import Currency from './currencycvrt'
import Transfers from './transfers'

const Features = () => {
  return (
    <>
    <div className='flex flex-col gap-y-[124px] pt-[112px]'>
    <International/>
    <Currency/>
    <Transfers/>
    </div>
    </>
  )
}

export default Features