import React, { useEffect, useState } from 'react'
import axios from "axios"

function Products() {
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0)
    useEffect(()=>{
        const getData=async()=>{
            const response=await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`)
            console.log(response.data)
            setProducts(response.data.products)
        }
        getData()
    },[skip])
  return (
    <div>
      {products.map((product)=>{
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            </div>
        )
      })}

      <button className='bg-blue-800 m-5 p-2' onClick={()=>{
        if(skip>0)setSkip(skip-10)
      }}>Prev</button>
      <button className='bg-blue-800 m-5 p-2' onClick={()=>{
        if(skip<194)setSkip(skip+10)
      }}>Next</button>
    </div>
  )
}

export default Products