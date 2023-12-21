import axios from "axios"
export function ProductsNew() {
  const createProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data);
      
      
    })
    console.log('creating product...')
  }
  
  return (
    <div>
      <p>hello frmo products new</p>
      {/* make a form for the user to fill out */}
      <form onSubmit={createProduct}>
        <p>Description<input name="description" type="text" /></p>
        <p>Name<input name="name" type="text" /></p>
        <p>Price<input name="price" type="text" /></p>
        <p>Supplier<input name="supplier_id" type="text" /></p>
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