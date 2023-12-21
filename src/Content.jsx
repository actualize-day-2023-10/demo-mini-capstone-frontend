import axios from 'axios'
import { ProductsIndex } from './ProductsIndex'
import {useState, useEffect} from 'react'

export function Content() {  
  const [products, setProducts] = useState([])

  const handleIndexProducts = () => {
    console.log('get data from rails')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  };

  // handleIndexProducts()
  useEffect(handleIndexProducts, [])
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      {/* <button onClick={handleIndexProducts}>Get products</button> */}
      <ProductsIndex products={products}/>
    </div>
  )
}


// get data from rails
// show that data to the user
// give links/buttons/etc for user to navigate the app