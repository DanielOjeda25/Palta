import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout'


const Home: NextPage = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/allPaltas')
      .then((res) => res.json())
      .then(({ data }: TAPIAvoResponse) => setProducts(data))
  })
  return (
    <div className=''>
      <Head>
        <title>Home</title>
      </Head>

     <Layout>
      <Header />
      <ProductList products={products} />
     </Layout>
    </div>
  )
}

export default Home
