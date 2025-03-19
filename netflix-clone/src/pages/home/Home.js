import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Rowlist from '../../components/Rows/Rowlist/Rowlist'
import Row from '../../components/Rows/Row/Row'


const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Row/>
      <Rowlist/>
      <Footer/>
    </>
  )
}

export default Home
