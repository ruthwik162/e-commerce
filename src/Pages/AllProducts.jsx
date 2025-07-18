import React, { useEffect, useState } from 'react'
import { useAppContext } from '../AppContext/AppContext'
import ProductCard from '../Components/ProductCard';

const AllProducts = () => {
    const {products,searchQuery} = useAppContext();
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        if(searchQuery.length  > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}else{
            setFilteredProducts(products)
        } 
    },[products,searchQuery])
  return (
    <div className='mt-8 md:mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'> 
            <p className='text-2xl fot-medium uppercase'>AllProducts</p>
            <div className='w-26 h-0.5 bg-primary rounded-full'></div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-4 md:gap-6 lg:grid-cols-5 mt-6 '>
            {filteredProducts.filter((product)=>product.inStock).map((product,index)=>(
                <ProductCard key={index} product={product} />
            ))}
        </div>
    </div>
  )
}

export default AllProducts