import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout'
import fetch from 'isomorphic-unfetch'
import 'semantic-ui-css/semantic.min.css'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const {data: productList} : TAPIAvoResponse = await response.json()
  return {
    props: {
      productList
    }
  }
}

const Home = ({productList}: {productList: TProduct[]}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

     <Layout>
      <Header />
      <ProductList products={productList} />
     </Layout>
    </div>
  )
}

export default Home
