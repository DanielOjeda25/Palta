import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/NavBar/Navbar'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Home</title>
      </Head>

     <Navbar />
    </div>
  )
}

export default Home
