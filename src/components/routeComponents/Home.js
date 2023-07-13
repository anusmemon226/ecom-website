import React from 'react'
import Carousel from '../Carousel';
import CategoryBanner from '../CategoryBanner';
import ProductsOutlet from '../ProductsOutlet';
import WhyUs from '../WhyUs';
function Home() {
  return (
    <>
      <Carousel/>
      <CategoryBanner/>
      <ProductsOutlet/>
      <WhyUs/>
      <ProductsOutlet reverse={true} class={"mensBg"}/>
    </>
  )
}

export default Home
