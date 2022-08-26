import Footer from '@components/Footer/Footer'
import Navbar from '@components/NavBar/Navbar'
import React  from 'react'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout