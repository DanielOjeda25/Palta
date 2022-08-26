import { GetStaticPaths, GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    paths, fallback: false
  }

}
//esto sera llamado en el build time
  export const getStaticProps: GetStaticProps = async ({params}) => {
    const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params?.id}`)


    const product = await response.json()

    return {props: {product}}
  }
  const ProductPage = ({product}: {product: TProduct}) => {
    return (
      <Layout>
        {product == null ? null : <ProductSummary product={product} />}
      </Layout>
    )
  }

  export default ProductPage