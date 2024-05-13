import { React, useState } from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { MdOutlineMail, MdLockOutline } from 'react-icons/md'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState(null);

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        setUserName(res.data);
                        history.push('/');
                    }
                    else if (res.data === "notexist") {
                        alert("User not found WHY ?")
                    }
                })
                .catch(e => {
                    alert("Catched at login")
                    console.log(e)
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Wrapper className='section'>
            <h1>Login </h1>
            <form action='POST'>
                <div className='form-item'>
                    <MdOutlineMail />
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder='Email address'></input>
                </div>
                <div className='form-item'>
                    <MdLockOutline />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder='Password' ></input>
                </div>
                <div className="form-item">
                    <button onClick={submit}>Login</button>
                </div>
            </form>

            <p>Don't have an account? <Link to='/signup' >Sign Up</Link></p>
            <div className='social-login'>
                <p>Sign In via socials</p>
                <div>
                    <span style={{ marginRight: '1rem' }}>
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjtn8zzwIGCAxV9xTgGHawTCIYQFnoECAoQAQ&url=https%3A%2F%2Fwww.facebook.com%2Flogin%2F&usg=AOvVaw2NEj8NwnxhOue64pSijk7e&opi=89978449"><FaFacebookF /></a>
                    </span>
                    <span style={{ marginRight: '1rem' }}>
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjXnKyRwIGCAxX_7jgGHXMgBaUQFnoECAQQAQ&url=https%3A%2F%2Faccounts.google.com%2Fsignup%2Fv2%2Fwebcreateaccount%3Fhl%3Den-GB%26flowName%3DGlifWebSignIn%26flowEntry%3DSignUp%2F&usg=AOvVaw2jHnwK-68TsShjoTIc2DLH&opi=89978449"><FaGoogle /></a>
                    </span>
                    <span>
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjstpKbwYGCAxXtxzgGHaPxD4sQFnoECAoQAQ&url=https%3A%2F%2Ftwitter.com%2Fsettings%2Faccount%3Flang%3Den&usg=AOvVaw3P5QzChg3zd5VOittU5E-h&opi=89978449"><FaTwitter /></a>
                    </span>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login

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
            padding-left:3rem;
        }
        button{
            width:332px;
            padding:1rem;
        }
    }
    .social-login{
        margin-top:2rem;
        p{
            font-size:1rem;
            margin-bottom:1rem;
        }
        div{
            display:flex;
            justify-content:space-between;
            width:332px;
            svg{
                background-color:#f5f5f5;
                padding:1rem 2.3rem;
                border-radius:0.5rem;
                font-size:1.5rem;
                cursor:pointer;
            }
        }
    }
`