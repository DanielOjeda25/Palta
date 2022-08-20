import Link from 'next/link'
import React from 'react'
import { Palta } from '../SVGIcons'
import Shopping from './Shopping'
const Navbar = () => {
  return (
    <header className='flex justify-center items-center h-20 w-full flex-col'>
      <nav className="rounded-lg fixed top-2  z-20 w-2/3 border drop-shadow-md border-green-500 bg-white px-1 py-1 sm:px-4 ">
        <div className='container flex flex-wrap justify-between items-center mx-auto lg:justify-evenly '>
          <div className='flex md:order-2 relative group hover:bg-lime-100 py-1 px-2 rounded transition duration-500'>
            <Link href='/' passHref>
              <a className='flex flex-row '>
                <Palta className='rounded-md object-cover ease-in-out duration-500 group-hover:rotate-12' />
                <span className='self-center text-xl font-semibold whitespace-nowrap  '>PALTA</span>
              </a>
            </Link>
          </div>

          <div className='flex md:order-2 hover:bg-lime-100 py-1 px-2 rounded transition duration-500'>
            <Link href='/cart'>
              <a>
                <Shopping cartCount={0} name='Cart' />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar