import axios from 'axios'
import { ProductsIndex } from './ProductsIndex'
import { ProductsNew } from './ProductsNew'
import { Modal } from './Modal'
import { ProductsShow } from './ProductsShow'
import {useState, useEffect} from 'react'

export function Content() {  
  const [products, setProducts] = useState([])
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});


  const handleIndexProducts = () => {
    console.log('get data from rails')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log('creating product')
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data);  
      // reset the products array to add the new product    // 
      setProducts([...products, response.data])
      successCallback()
    })
  }

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };
    
  
  // handleIndexProducts()
  useEffect(handleIndexProducts, [])
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsNew onCreateProduct={handleCreateProduct}/>
      {/* <button onClick={handleIndexProducts}>Get products</button> */}
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct}/>
      </Modal>
    </div>
  )
}


// get data from rails
// show that data to the user
// give links/buttons/etc for user to navigate the app
// mimic httpie web requests to rails for various CRUD actions