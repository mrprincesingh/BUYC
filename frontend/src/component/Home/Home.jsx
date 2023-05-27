import React, { Fragment } from 'react'
import MetaData from '../Loader/Metadata'
import {CgMouse} from "react-icons/cg"
import Loader from '../Loader/Loader'
import "./Home.css"
import ProductCard from './ProductCard'

const Home = () => {
  const product = {
    name:"Blue Shirt",
    image:[{url:"http://i.ibb.co/DRST11n/1.webp"}],
    price:5000,
    _id:"12458796325"
  
  }
  const loading = false
  return <>
    {loading ? (<Loader />): (
      <Fragment>
      <MetaData title="BYUC" />
        <div className='banner'>
          <p>Welcome to BYUC</p>
          <h1>FIND AMAZING CARS HERE</h1>
          <a href="#container">
            <button>
                Scroll <CgMouse />
            </button>
          </a>
        </div>
         <h2 className='homeHeading'>Featured Cars</h2>
        <div className='container' id="container">
         {/* {products && products.map((product) =>
          <ProductCard product={product} key={product._id} />
         )} */}
         <ProductCard  />
        </div> 
    </Fragment>
    )}
  </>
}

export default Home