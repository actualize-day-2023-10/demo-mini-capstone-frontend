import { useState, useEffect } from 'react'
import axios from 'axios'

export function OrdersIndex() {
  const [orders, setOrders] = useState([])
  
  const getOrders = () => {
    console.log('getting orders');
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])

  
  return (
    <div>
      <p>I am in orders index</p>
      {orders.map(order => (
        <div key={order.id}>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          Products in your order:
          {order.carted_products.map(cp => (
            <div key={cp.id}>
              <p>name: {cp.product.name}</p>
              <p>quantity: {cp.quantity}</p>
              <img width="300px" src={cp.product_images[0].url} />
            </div>
          ))}
          < hr />
        </div>
      ))}
    </div>
  )
}