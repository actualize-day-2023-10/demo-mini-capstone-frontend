import axios from "axios"
import { useEffect, useState } from 'react'

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])
  
  const createProduct = (event) => {    
    event.preventDefault();
    const params = new FormData(event.target)    
    props.onCreateProduct(params, () => {event.target.reset()})    
    console.log('creating product...')
  }

  // i need products index here to show in my dropdown
  const productsIndex = () => {
    console.log('hello from products index')
    axios.get('http://localhost:3000/suppliers.json').then(response => {
      console.log(response.data);
      setSuppliers(response.data)
    })
  }

  useEffect(productsIndex, [])

  
  return (
    <div>
      <p>hello frmo products new</p>
      {suppliers.map(supplier => (
        <p key={supplier.id}>{supplier.name}</p>
      ))}
      {/* make a form for the user to fill out */}
      <form onSubmit={createProduct}>
        <p>Name<input name="name" type="text" /></p>
        <p>Description<input name="description" type="text" /></p>
        <p>Price<input name="price" type="text" /></p>        
        <select name="supplier" id="cars">
          {suppliers.map(supplier => (
            <option>{supplier.name}</option>

          ))}          
        </select>
        <button>New product</button>
      </form>
      {/* when user clicks button send web request to rails */}
      {/* web request has all params user typed in form */}
      {/* bonus: update the page with the newly created product */}
    </div>
  )
}


// supplier_id
// name
// price
// description
// inventory