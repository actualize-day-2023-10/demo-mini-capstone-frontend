export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <p>in products index</p>
      {props.products.map(product => (
        <div>
          <p>name: {product.name}</p>
          <p>price:  {product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}