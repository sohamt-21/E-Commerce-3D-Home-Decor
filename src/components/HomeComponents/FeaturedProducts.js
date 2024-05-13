import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../Product'
import productsdata from './mini_products.json';


function FeaturedProducts() {
        return (
            <Wrapper className='section'>
                <p>Featured Products</p>
                <h1>Experience your furniture like never before. Buy all furnitures &amp; accessories online.</h1>
                <Link to='/products'>
                    <button style={{ margin: 'auto', marginBottom: 10, marginTop: 8 }}>View all</button>
                </Link>
                <div className='products'>
                    {productsdata.map((product) => {
                        const { id, name, image, price } = product
                        return <Product key={id} id={id} name={name} image={image} price={price} />
                    })}
                </div>
            </Wrapper>
        )
    }

export default FeaturedProducts

const Wrapper = styled.div`
    background-color: whitesmoke;
    width:90%;
    height:1000px;
    text-align:center;
    padding:5px;


    .header{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:0 2rem;
        p{
            text-align:center;
            font-weight:1000;
            font-size:30px;
            margin-bottom:0.5rem;
        }
        h1{
            margin-bottom:1rem;
            font-size:2.5rem;
            text-align:center;
            font-weight:1000;
        }
        button{
            margin-top:0.5rem;
        }
        margin-bottom:2rem;
    }
    .products{
        display:grid;
        grid-template-columns:repeat(1,1fr);
        gap:2rem;
    }
    
    @media screen and (min-width:992px){
        .products{
            grid-template-columns:repeat(3,1fr);
        }
    }

    @media screen and (min-width:776px) and (max-width:992px){
        .products{
            grid-template-columns:repeat(2,1fr);
        }
    }
`