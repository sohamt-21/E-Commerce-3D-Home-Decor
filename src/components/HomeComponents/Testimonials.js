import React from 'react'
import styled from 'styled-components'
// import { FaUserAlt } from 'react-icons/fa'
import avatar from '.././../assets/avatar.png'

const reviews = [
    {
        id: 0,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar,
    },
    {
        id: 1,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar,
    },
    {
        id: 2,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar
    },
    {
        id: 3,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar
    },
    {
        id: 4,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar
    },
    {
        id: 5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id minima maiores cupiditate.",
        name: "Name Surname",
        role: "Random Role",
        image: avatar
    }

]
function Testimonials() {
    return (
        <Wrapper className='section-center'>
            <div className='header'>
                <h1>Feedback from our <br /> customers</h1>
                <p>Ornare aenean euismod elementum nisi quis eleifend.
                    Diam donec adipiscing tristique risus nec.</p>
            </div>
            <div className='testimonials'>
                {
                    reviews.map((review) => {
                        const {id,des,name,role,image} = review
                        return (
                            <div key={id} className='testimonial'>
                                <p className='review'>" {des} "</p>
                                <div className='profile'>
                                    <img src={image} alt={name} style={{height: 50, width: 50}}></img>
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{role}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Testimonials

const Wrapper = styled.div`
    .header{
        display:grid;
        grid-template-columns:1fr;
        align-items:center;
        gap:2rem;
        h1{
           font-size:2.5rem;

        }
        margin-bottom:2rem;
    }

    .testimonials{
        display:grid;
        grid-template-columns:1fr;
        gap:1.2rem;
        .testimonial{
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            padding:1.5rem;
            border-radius:0.3rem;
            .review{
                font-size:1rem;
                margin-bottom:1rem;
                min-height:3rem;
            }
            .profile{
                display:grid;
                grid-template-columns:0.2fr 1fr;
                column-gap:2rem;
                p{
                    font-size:0.8rem;
                }
                img{
                    border-radius:50%;
                }
            }
        }
    }

    @media screen and (min-width:776px){
        .testimonials{
            grid-template-columns:repeat(3,1fr);
            .testimonial{
                .review{
                    min-height:6rem;
                }
            }
        }
    }

    @media screen and (min-width:556px){
        .header{
            grid-template-columns:1fr 1fr;
        }
    }

`