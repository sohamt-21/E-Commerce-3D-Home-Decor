import styled from 'styled-components'
import { Link } from 'react-router-dom'
import productsdata from './HomeComponents/products.json';
import Spline from '@splinetool/react-spline';
import { BounceLoader } from 'react-spinners';

function ListView({ products }) {
    return (
        <Wrapper>
            {
                productsdata.map((product) => {
                    const { id, name, image, price, description } = product
                    return (
                    <div key={id} className="product-item">
                        <div className='scenes' style={{}}>
                            <Spline scene={image} placeholder= {<BounceLoader style={{alignSelf:'center', width:'fit-content', margin:'auto', display:'block'}}/>}/>
                        </div>
                        <div className='right'>
                            <h3>{name}</h3>
                            <p className="price">Rs.{price}</p>
                            <p className="des">{description.substring(0, 150)}...</p>
                            <button className='button2'>
                                <Link to={`/products/${id}`}>DETAILS</Link>
                            </button>
                        </div>
                    </div>
                    )
                })
            }

        </Wrapper>
    )
}
const Wrapper = styled.div`
    // display:flex;
    // flex-direction:column;
    // justify-content:flex-start;
    // border:2px solid red;

    .scenes{
        width:350px;
        height:300px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    .product-item{
        display:flex;
        flex-direction:row;
        gap:2rem;
        margin-bottom:2rem;
        width:700px;
        height:300px;
        // box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
        border:0.3px solid black;
        h3{
            text-transform:capitalize;
            margin-bottom:1rem;
        }
    }
    .price{
        color:#bb58fe;
        margin-bottom:1rem;
        font-weight:700;
    }

    a{
        color:white;
    }

    .button2{
        padding:0.5rem;
        font-size:0.7rem;
        border-radius:0.3rem;
        transition:'all ease-in'
    }
    
    .des{
        margin-bottom:1rem;
    }
         
    @media (min-width:992px){
        .product-item{
            grid-template-columns:300px 1fr;
            align-items: center;
            img{
                height:200px;
                width:300px;
            }
        }
    }
`
export default ListView