import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/NavBar/Navbar'
import Header from '@components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Home</title>
      </Head>

     <Navbar />
     <Header />
    </div>
  )
}

export default Home
