import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



type ProductsListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) => {
  return products.map(({ name, id, price, image, attributes }) => (
    <div className='' key={id}>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-base md:text-1xl uppercase">{name}</h1>
          <p className="text-gray-600 text-sm mt-1">{attributes.taste}</p>
        </div>
        <Image className="h-56 w-full object-cover mt-2 transform transition duration-500 hover:scale-105" src={image} layout='responsive' width={200} height={200} alt="Palta" />
        <div className="flex items-center justify-between px-4 py-2 bg-green-700">
          <h1 className="text-gray-200 font-bold text-xl md:text-lg ">${price}</h1>
          <Link href={`/product/${id}`} >
            <a className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded hover:bg-green-600"> +More Info</a>
          </Link>
        </div>
      </div>
    </div>
  ))
}

const ProductList = ({ products }: ProductsListProps) => (
  <div className=' w-full px-2 my-5 flex justify-center'>
    <div className='flex justify-center w-3/4 sm:w-1/2 px-2 md:w-11/12 lg:w-1/2 '>
      <div className='grid overflow-hidden grid-cols-1 auto-rows-auto  w-full gap-x-1 sm:grid-cols-2'>
        {mapProductsToCards(products)}
      </div>
    </div>
  </div>
)

export default ProductList	