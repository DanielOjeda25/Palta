import { Palta } from '@components/SVGIcons'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex flex-nowrap justify-center items-center space-x-1 w-auto px-2 py-2 mt-10 sm:mt-0'>
        <div className='item w-32 h-32 flex-none'>
          <div className='flex justify-end items-center  h-full'>
            <h1 className='text-3xl sm:text-4xl uppercase font-semibold lg:text-5xl'>
              Palta
            </h1>
          </div>
        </div>
        <div className='item w-20 h-32 flex-none'>
          <div className='flex justify-center items-center  h-full transform hover:animate-pulse  duration-500 ease-in-out'>
            <Palta size='80px' />
          </div>
        </div>
        <div className='item w-32 h-32 flex-none'>
          <div className='flex justify-start items-center  h-full'>
            <h1 className='text-3xl sm:text-4xl font-semibold uppercase lg:text-5xl'>
              Place
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
