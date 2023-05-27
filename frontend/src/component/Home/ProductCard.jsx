import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
  <> <Link className='productCard' to={`/product/5556665}`}>
  <img src="http://i.ibb.co/DRST11n/1.webp" alt="pp" />
   <p>Car</p>
   <span>100001000</span>
  </Link></>
   
  
  )
}

export default ProductCard