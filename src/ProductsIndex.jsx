export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <p>in products index</p>
      {props.products.map(product => (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}