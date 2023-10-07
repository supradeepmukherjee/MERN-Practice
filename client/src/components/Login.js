import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { userContext } from "../App"

const Login = () => {
    const { dispatch } = useContext(userContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const postData = async (e) => {
        e.preventDefault()
        const { email, password } = user
        const response = await fetch('http://localhost:3300/signin', {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (response.status === 400 || !data) {
            console.error('error')
        } else {
            dispatch({ type: 'USER', payload: true })
            console.log('success')
            navigate('/')
        }
    }
    return (
        <section className="login">
            <div className="container mt-5">
                <div className="loginContent">
                    <div className="loginImg">
                        <figure>
                            <img src="" alt="login pic" />
                        </figure>
                        <NavLink to='/signup' className="signupImgLink">Not Registered?</NavLink>
                    </div>
                    <div className="loginForm">
                        <h2 className="formTitle">
                            Log In
                        </h2>
                        <form className="registerForm" id="registerForm" action="">
                            <div className="formGrp">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" value={user.email} placeholder="Email ID" onChange={handleChange} />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleChange} placeholder="Your Password" />
                            </div>
                            <div className="form-button form-group">
                                <input type="submit" name="login" id="login" className="form-submit" value='Log In' onClick={postData} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login