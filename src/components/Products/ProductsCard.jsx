import React from 'react'
import Styled from "styled-components"
import Grid from '@material-ui/core/Grid'



const Product = Styled.div`
    background:#b3b3b3;
    height: 90px;
    width: 100%;
    

`

const ProductsCard = () => {
    return (
        <Grid item  sm={12} md={6} >
            <Product>
                here is a product
            </Product>
            
        </Grid>
    )
}

export default ProductsCard
