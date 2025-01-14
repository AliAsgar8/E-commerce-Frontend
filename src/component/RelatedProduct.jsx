import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProduct = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [realated , setRelated] = useState([]);


    useEffect(() => {
        if(products.length > 0){
            let productCopy = products.slice();

            productCopy = productCopy.filter(item => category === item.category )
            productCopy = productCopy.filter(item => subCategory == item.subCategory)

            setRelated(productCopy.slice(0,5));
            


        }
    },[])
    
  return (
    <div className='my-24'>
    <div className='text-3xl text-center'>
    <Title Title1={'RELATED'} Title2={'PRODUCTS'}/>

    </div>

    <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
    {
        realated.map((item,index) => {
            return(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            )
        })
    }
      
    </div>
    </div>
  )
}

export default RelatedProduct
