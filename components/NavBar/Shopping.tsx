import React from 'react'
import { Canasta } from '@components/SVGIcons'

type ShoppingProps = {
  cartCount: number,
  name: string
}

const Shopping = ({ cartCount, name }: ShoppingProps) => {

  const showCount = () => {

    // Depende si no tiene ningun valor almacenado, siempre es 0
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 9) {
      return (
        <>
          <span className='absolute top-0 right-0 md:-top-2 md:-right-2 h-4 w-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold'>9+</span>
        </>
      )
    }
    return `(${cartCount})`
  }
  return (
    <div className='flex md:order-2'>
      <Canasta />
      <div className='self-center whitespace-nowrap font-regular'>
        {`${name}`}{`${showCount()}`}
      </div>
    </div>
  )
}

export default Shopping