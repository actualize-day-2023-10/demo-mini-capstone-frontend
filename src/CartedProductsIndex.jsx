import axios from 'axios'
import {useState} from 'react'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  
  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('http://localhost:3000/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }
  
  return (
    <div>
      <p>This is the shopping cart</p>
      <button onClick={getCartedProducts}>Get data on the shopping cart</button>
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          {/* <p>{JSON.stringify(cartedProduct)}</p> */}
          <p>name: {cartedProduct.product.name}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <hr />
        </div>
        
      ))}
    </div>
  )
}