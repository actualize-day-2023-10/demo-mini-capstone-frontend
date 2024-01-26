export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>

      {/* <p style={{fontSize: '40px', textDecoration: 'underline', fontWeight: 600 }}>in products index</p> */}
      <p className="text-4xl font-bold underline">in products index</p>
      {props.products.map(product => (
        <div key={product.id}>
          <p>name: {product.name}</p>
          <p>price:  {product.price}</p>
          {/* {JSON.stringify(product.images[0] && product.images[0].url)} */}
          <img width="300px" src={product.images[0] && product.images[0].url} />
          <button onClick={() => props.onShowProduct(product)}>More info</button>
          <hr />
        </div>
      ))}
    </div>
  )
}