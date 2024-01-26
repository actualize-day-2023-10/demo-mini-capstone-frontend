export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>

      {/* <p style={{fontSize: '40px', textDecoration: 'underline', fontWeight: 600 }}>in products index</p> */}
      <p className="text-4xl font-bold underline">in products index</p>
      <div className="grid-cols-3 grid p-7">
        {props.products.map(product => (
          <div key={product.id} className="shadow-lg p-4 mb-4">
            <p>name: {product.name}</p>
            <p>price:  {product.price}</p>
            {/* {JSON.stringify(product.images[0] && product.images[0].url)} */}
            <img class_name="w-full aspect-[4-3] object-cover" src={product.images[0] && product.images[0].url} />
            <button className="border rounded border-gray-500 hover:bg-gray-100" onClick={() => props.onShowProduct(product)}>More info</button>            
          </div>
        ))}
      </div>
    </div>
  )
}