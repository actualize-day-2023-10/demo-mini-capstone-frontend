import axios from 'axios'
import {useState, useEffect} from 'react'
import Stripe from 'stripe'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  
  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('http://localhost:3010/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  const createOrder = () => {
    console.log('creating order....')
    axios.post('http://localhost:3010/orders.json').then(response => {
      console.log(response.data);
      
      
      let stripe = Stripe("sk_test_51G6hpUIAOtZSo9ug9oJojU7R6RQzqq9INPjxfAxlUoid6JS2YSGTuA3sKi8fvfBs8jlCiQKYhEpjM59bdEC6Qq2N00oXH48BCq");
      
      stripe.checkout.sessions.create({        
        mode: 'devleopment',
        payment_method_types: [
          'card',
        ],
        success_url: `http://localhost:5173/admin/stripe`,
        cancel_url: `http://localhost:5173/admin/stripe`,
        line_items: [ // all arguments are required
          {
            price_data: {
              unit_amount: 4000,
              currency: 'usd',
              product_data: {
                name: 'Test Product'
              },
            },
            quantity: 1,
          },
        ],
      })
      // window.location.href = `/orders/${response.data.id}`
      window.location.href = "https://buy.stripe.com/test_8wMdTCetX7FxdNe28a"
    })
  }

  // getCartedProducts()
  // 235
  useEffect(getCartedProducts, [])
  
  return (
    <div>
      <p>This is the shopping cart</p>
      
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          {/* <p>{JSON.stringify(cartedProduct)}</p> */}
          <p>name: {cartedProduct.product.name}</p>
          <p>price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <hr />
        </div>        
      ))}
      <p><button onClick={createOrder}>Buy</button></p>
    </div>
  )
}