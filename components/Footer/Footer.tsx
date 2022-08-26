import React from 'react'
import { Palta } from '@components/SVGIcons'
import { FaTwitter, FaGithub,FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
      <footer className='p-4 bg-white sm:p-6'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Palta className='mr-3 h-10' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>
              Palta
            </span>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
                Contact
              </h2>
              <ul className='text-gray-600'>
                <li className='hover:text-blue-500'>
                  <a href='https://www.linkedin.com/in/daniel-ojeda26/' target='_blank' className='hover:underline' rel="noreferrer">
                     <FaLinkedin style={{ display: 'inline-block', marginRight: '2px' }}/>LinkedIn
                  </a>
                </li>
                <li className='hover:text-slate-400'>
                  <a href='https://github.com/DanielOjeda25' className='hover:underline' target='_blank' rel="noreferrer" ><FaGithub style={{ display: 'inline-block', marginRight: '2px' }} />Github</a>
                </li>
                <li className='mb-4 hover:text-cyan-500'>
                  <a className='hover:underline' href='https://twitter.com/Dan_Ojeda_Dev03' target='_blank' rel="noreferrer">
                    <FaTwitter style={{ display: 'inline-block',marginRight: '2px' }} />Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
              Servicios
            </h2>
            <ul className='text-gray-600'>
              <li className='mb-4'>
                <a href='' className='hover:underline'>
                  Todos los productos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-center text-center'>
          <span className='text-sm text-gray-500 sm:text-center'>
            © 2022, All Right Reserved
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
