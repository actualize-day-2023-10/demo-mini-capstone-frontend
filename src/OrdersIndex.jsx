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
        <div>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          < hr />
        </div>
      ))}
    </div>
  )
}