import { useEffect, useState } from "react"
import { Product } from "./interfaces/product";
import { ProductList } from "./pages/ProductList";
import { Header } from "./components/Header";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

const addProduct = () =>{
  setProducts(prevState => [...prevState,  {      id: prevState.length + 101,
    name: 'prod' + prevState.length + 1 ,
    price: 4030,
    description: "description",
    pictureUrl : "ssssss",
    type: "clothes",
    brand:"mine",
    quantityInstock: prevState.length - 1,} ]   )
}

useEffect( () => {
  fetch('http://localhost:5000/api/Products')
    .then (response => response.json())
    .then(data => setProducts(data))
}, [])

  return (
    <>
          <Header/>
          <ProductList products={products} addProduct={addProduct}/>

    </>
  )
}

export default App
