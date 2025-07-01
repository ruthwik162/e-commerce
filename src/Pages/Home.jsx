import React from 'react'
import MainBanner from '../Components/MainBanner'
import ProductCard from '../Components/ProductCard'
import BestSeller from '../Components/BestSeller'
import Categories from '../Components/Categories'
import { useAppContext } from '../AppContext/AppContext'


const Home = () => {
  const {product} = useAppContext()
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller product={product}/>
    </div>
  )
}

export default Home