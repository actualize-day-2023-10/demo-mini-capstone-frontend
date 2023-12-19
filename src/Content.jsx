import axios from 'axios'
import { ProductsIndex } from './ProductsIndex'
import {useState} from 'react'

export function Content() {
  const [products, setProducts] = useState([])
  
  const handleGetProducts = () => {
    console.log('in get products');
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <button onClick={handleGetProducts}>Get products</button>
      <ProductsIndex products={products}/>
    </div>
  )
}
