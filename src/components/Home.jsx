import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {

  const data = {
    name: "Online Store"
  }

  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home