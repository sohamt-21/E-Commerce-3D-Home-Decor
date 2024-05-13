import React from 'react'
import styled from 'styled-components'
import heading from '../../assets/heading.mp4'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Wrapper className='section-center'>
            <div className='left'>
                <h1>
                    E-commerce furniture apps created using React JS.
                </h1>
                <p>
                    View products 360 view and get better experience.
                </p>
                <Link to='/products'>
                    <button>
                        Check Offers
                    </button>
                </Link>
            </div>
            <div className='right'>
                <img src={heading} alt="header"></img>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    gap:5rem;
    align-items:center;
    .left{
        h1{
            font-size:3rem;
            font-weight:bolder;
            margin-bottom:1rem;
        }
        p{
            margin-bottom:1.5rem;
        }
    }
    .right{
        img{
            width:100%;
            height:400px;
            border-radius:1rem;
        }
    }
    @media screen and (min-width:992px){
        .left{
            h1{
                font-size:4rem;
            }
        }
    }

    @media screen and (min-width:776px){
        grid-template-columns:1fr 1fr;
    }
`