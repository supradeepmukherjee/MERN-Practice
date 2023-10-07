import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: ''
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const postData = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword, phone, work } = user
        const response = await fetch('http://localhost:3300/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, cpassword, phone, work })
        })
        if (response.status === 422 || !response) {
            console.error('error');
        } else {
            console.log('success')
            navigate('/login')
        }
    }
    return (
        <section className="signup">
            <div className="container mt-5">
                <div className="signupContent">
                    <div className="signupForm">
                        <h2 className="formTitle">
                            Sign Up
                        </h2>
                        <form method="POST" className="registerForm" id="registerForm" action="">
                            <div className="formGrp">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account"></i>
                                </label>
                                <input type="text" name="name" id="name" value={user.name} autoComplete="off" onChange={handleChange} placeholder="Your Name" />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email"></i>
                                </label>
                                <input type="email" name="email" id="email" value={user.email} autoComplete="off" onChange={handleChange} placeholder="Your Email ID" />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="phone">
                                    <i className="zmdi zmdi-phone"></i>
                                </label>
                                <input type="text" name="phone" id="phone" value={user.phone} autoComplete="off" onChange={handleChange} placeholder="Your Phone No." />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="work">
                                    <i className="zmdi zmdi-slideshow"></i>
                                </label>
                                <input type="text" name="work" id="work" value={user.work} autoComplete="off" onChange={handleChange} placeholder="Your Profession" />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" name="password" id="password" value={user.password} autoComplete="off" onChange={handleChange} placeholder="Your Password" />
                            </div>
                            <div className="formGrp">
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" value={user.cpassword} autoComplete="off" onChange={handleChange} placeholder="Confirm your Password" />
                            </div>
                            <div className="form-button form-group">
                                <input onClick={postData} type="submit" name="signup" id="signup" className="form-submit" value='register' />
                            </div>
                        </form>
                    </div>
                    <div className="signupImg">
                        <figure>
                            <img src="" alt="registration pic" />
                        </figure>
                        <NavLink to='/login' className="signupImgLink">I am already registered</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup