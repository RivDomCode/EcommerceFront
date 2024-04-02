import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Product } from "../interfaces/product";
import {ProductCard} from '../components/ProductCard'

interface Props{
    products : Product[];  //le decimos que products es un array del tipo Product
    addProduct:   () => void;  //es un metodo que no recibe parametros y devuelve void
}


export const ProductList = ( props: Props) => {

    const { products, addProduct } = props ;
    return (
        <>
            <h2>    Product List  </h2>

            <Grid container  spacing = {4}>
                {
                    products.map((product )=> (
                        <Grid item xs={4} >
                        <ProductCard key = {product.id} product = {product} />
                        </Grid>
                    ))
                }
            </Grid>
            <Button variant="contained" onClick={addProduct}>Add  Product</Button>
        </>
    )
}
