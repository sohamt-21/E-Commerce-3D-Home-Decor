import React from 'react'
import styled from 'styled-components'
import { BsApple } from 'react-icons/bs'
import { FaGooglePlay} from 'react-icons/fa'

function Hero2() {
    return (
        <Wrapper>
            <div className='section-center'>
                <div className="left">
                    <h1>Download app using App Store and Google Play</h1>
                    <div className='buttons'>
                        <a href="https://www.apple.com/in/app-store/"> <button style={{marginRight:'1rem'}}><BsApple/>App Store</button></a>
                        <a href="https://play.google.com/store/games?hl=en&gl=US"><button><FaGooglePlay/> Google Play</button></a>
                    </div>
                </div>
                <div className='right'>
                
                    <p style={{marginBottom:'1rem'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero2

const Wrapper = styled.div`
    background-color:#f5f5f5;
    .section-center{
        display:grid;
        grid-template-columns:1fr;
        gap:2rem;
    }
    .left{
        h1{
            font-size:2.5rem;
            margin-bottom:1.5rem;
        }
        div{
            display:flex;
            button{
                svg{
                    margin-right:0.5rem;
                }
            }
        }
    }

    @media screen and (min-width:776px){
        .section-center{
            grid-template-columns:1fr 1fr;
        }
    }
`