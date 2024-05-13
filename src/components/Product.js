import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa'
import Spline from '@splinetool/react-spline'

function Product({ id, name, image, price }) {
    return (
        <Wrapper style={{ width: 350, height: 300}}>
            <div className="content">
                <div className="container">
                    <Spline scene={image} />
                    <Link to={`/products/${id}`} className="link"><FaSearch /></Link>
                </div>
                <div className="product-footer">
                    <h3>{name}</h3>
                    <p>Rs.{price}</p>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
    margin:auto;
    margin-Top: 80px;
    .content{
        display:flex;
        flex-direction:column;
        padding:6px;
        border: 0.5px solid whitesmoke;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        align-self:center;
        border-radius:8px;
    }
    .container{
        align-items: centre;
        position:relative;
        margin-bottom:1rem;
        
        height:300px;
        width:350px;
        
    }
    .product-footer{
        display:flex;
        align-items:center;
        justify-content:space-between;
        h3{
            text-transform:capitalize;
        }
        border-top:1px solid black;
    }
    Spline{
        height:200px;
        width:100%;
        display: block;
        object-fit: cover;
        transition:all 0.3s linear;
        border-radius:5px;
    }
    .container:hover img{
        opacity:0.5;
    }
    h3{
        font-weight:500;
    }
    p{
        color:#bb58fe;
        font-weight:700;
    }
    .link{
        position:absolute;
        transform: translate(-50%, -50%);
        top:50%;
        left:50%;
        opacity:0;
        background-color:#bb58fe;
        height:2.5rem;
        width:2.5rem;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:all 0.3s linear;
        svg{
            color:white;
        }
    }
    .container:hover .link{
        opacity:1;
    }
`
export default Product;