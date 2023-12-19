import axios from 'axios'

export function Content() {
  const handleGetProducts = () => {
    console.log('in get products');
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
    })
  }
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <button onClick={handleGetProducts}>Get products</button>
    </div>
  )
}
