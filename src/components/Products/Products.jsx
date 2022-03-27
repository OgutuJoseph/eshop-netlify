import React from 'react';
import { Grid, CssBaseline } from '@material-ui/core';

import Product from './Product/Product'; 
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price:'$5', image:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x857.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price:'$10', image:'https://territories.co.ke/wp-content/uploads/2021/07/macbook1.jpg' },
]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (        
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <CssBaseline />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;
