import Image from "next/image"
import AddToCart from "./AddToCart"

type ProductSummaryPrps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryPrps) => {
  return (
    <>
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto shadow-lg">
    <div className="lg:w-4/5 mx-auto flex flex-wrap relative ">
      <Image alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.image} width={400} height={400}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.name}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.taste}</h1>
       
        <p className="leading-relaxed">{product.attributes.description}</p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
         <div className="absolute button-0 right-2">
          <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default ProductSummary