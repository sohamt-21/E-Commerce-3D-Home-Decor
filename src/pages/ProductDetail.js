import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import { useCartContext } from '../context/CartContext'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import data from '../components/HomeComponents/products.json'
import Spline from '@splinetool/react-spline'

function ProductDetail() {
    const { id } = useParams()
    const product = data.find((item) => item.id === id);
    const {loading, fetchSingleProduct } = useProductContext()
    const { addToCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetchSingleProduct(id)
        //eslint-disable-next-line
    }, [id])

    const increase = () => {
        if (quantity >= product.stock) {
            setQuantity(product.stock)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if (quantity < 2) {
            setQuantity(1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <Wrapper >
            <div className="section">
                <BreadCrumb title={product.name} product={product.name} />
                {
                        <div className="product-center">
                            <Spline scene={product.image}/>
                            <div>
                                <h1 className="title">{product.name}</h1>
                                <p className="price">Rs.{product.price}</p>
                                <p className="des">{product.description}</p>
                                <p className="info">
                                    <span>Available:</span>
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </p>
                                <p className="info">
                                    <span>SKU:</span>
                                    {product.stock}
                                </p>
                                <p className="info">
                                    <span>Brand:</span>
                                    {product.company}
                                </p>
                                <hr />
                               
                                    <>
                                        <div className='quantity'>
                                            <h2 onClick={decrease}>-</h2>
                                            <h1>{quantity}</h1>
                                            <h2 onClick={increase}>+</h2>
                                        </div>
                                        <Link to='/cart'>
                                            <button style={{ marginTop: '1rem' }} onClick={() => addToCart({ ...product, quantity: quantity })}>Add to Cart</button>
                                        </Link>
                                    </>
                                    
                            </div>
                        </div>
                }
            </div>
        </Wrapper>
    )

    // return (
    //     <div>
    //       <h2>{product.name}</h2>
    //       <p>Price: Rs.{product.price}</p>
    //       <p>Description: {product.description}</p>
    //       {/* Add more details as needed */}
    //     </div>
    //   );

}
const Wrapper = styled.div`
    h1,p{
        margin-bottom:1rem;
        text-transform: capitalize;
    }
    .product-center{
        display:grid;
        row-gap:3rem;
    }
    .info{
        display:grid;
        grid-template-columns:100px 1fr;
        column-gap:1rem;
        color:rgb(37, 37, 53);
    }
    .quantity{
        width:120px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        h1{
            margin:0;
        }
        h2{
            cursor:pointer;
        }
    }

    .price{
        color:#bb58fe;
        font-weight:700;
    }
    .des{
        line-height:1.5rem;
    }
    span{
        font-weight:bolder;
    }
    @media (min-width:992px){
        .product-center{
            grid-template-columns:1fr 1fr;
            column-gap:3rem;
            align-items:start;
        }
        
    }
`
export default ProductDetail
