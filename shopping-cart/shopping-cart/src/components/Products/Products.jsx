import React, { useState, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts('iphone').then((response) => {

            setProducts(response);

        });

    }, []);

    console.log(products)

    return (
        <section className='products container'>
            products
        </section>
    );
}

export default Products;



