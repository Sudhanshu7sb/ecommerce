import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const data = {
    name:"Online Ecommerce"
  }
  return (
    <HeroSection myData={data} />
  )
}

export default About