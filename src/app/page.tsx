import Hero from '@/components/Hero'
import Myproduct from './Myproducts'
import React from 'react'
import Best from './best/page'







// import ProductPage from './product/[slug]/page'



const homepage = () => {
  return (
    <div>
    <Hero/>
    {/* <Myproduct/> */}
     <Best/>
     <Myproduct  />
     
    
    </div>
  )
}
export default homepage