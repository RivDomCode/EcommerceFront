import { useEffect, useState } from "react"

function App() {

  const [products, setProducts] = useState([
    {name: 'prod1', price: 100},
    {name: 'prod2', price: 200},
  ]);

const addProduct = () =>{
  setProducts(prevState => [...prevState,  {name: 'prod' + prevState.length + 1 , price: 400} ]   )
}

useEffect( () => {
  fetch('http://localhost:5000/api/Products')
    .then (response => response.json())
    .then(data => setProducts(data))
}, [])

  return (
    <>
          <h1>ECOMMERCE</h1>
          <div>
              {
                products.map((product, index) => (
                  <li key={index}>{product.name} -  ${product.price}</li>
                ))
              }
          </div>
          <button onClick={addProduct}>Add  Product</button>
    </>
  )
}

export default App
