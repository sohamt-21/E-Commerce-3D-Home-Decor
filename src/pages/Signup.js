import { React, useState } from 'react'
import styled from 'styled-components'
import { MdOutlineMail, MdLockOutline } from 'react-icons/md'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            axios.post("http://localhost:8000/signup", {
                name,surname,email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                        history.push('/Login');
                    }
                    else if (res.data === "notexist") {
                        alert("Registration Successful")
                        history.push('/Login');
                    }
                })

                .catch(e => {
                    alert("Catched at Sign UP")
                    console.log(e);
                })

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Wrapper>
            <h1>Sign Up</h1>
            <form action="POST">
                <div className='name'>
                    <div className='form-item'>
                        <input type='text' onChange={(e) => { setName(e.target.value) }}  name='firstname' placeholder='First name'></input>
                    </div>
                    <div className='form-item'>
                        <input type='text' onChange={(e) => { setSurname(e.target.value) }} name='lastname' placeholder='Last name'></input>
                    </div>
                </div>
                <div className='form-item'>
                    <MdOutlineMail />
                    <input className="icon-input" onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" placeholder='Email address'></input>
                </div>
                <div className='form-item'>
                    <MdLockOutline />
                    <input className="icon-input" onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" placeholder='Password'></input>
                </div>
                <div className='checkbox'>
                    <input type="checkbox"></input>
                    <label>Subscribe to our newsletter</label>
                </div>
                {/* <input type="button" name="Sign In" id="" onClick={submit} /> */}
                <button onClick={submit}>Register</button>
                {/* <div className='form-item'>
                    <input type="submit" onClick={submit} />
                </div> */}
            </form>
            <p>Already have an account? <Link to='/login' >Log In</Link></p>
        </Wrapper>
    )
}
export default Signup

const Wrapper = styled.div`
    width:332px;
    margin:0 auto;
    padding-top:3rem;
    h1{
        margin-bottom:1rem;
        text-align:center;
    }
    p{
        text-align:center;
    }
    form{
        margin-bottom:1rem;
        input{
            width:80%;
        }
        .name{
            display:grid;
            grid-template-columns:1fr 1fr;
            column-gap:1rem;
            input{
                width:124px;
            }
        }
        .icon-input{
            padding-left:3rem;
        }
        button{
            width:332px;
            padding:1rem;
        }
        .checkbox{
            input{
                width:1rem;
            }
        }
    }
`