import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:3300/about', {
                method: 'GET',
                credentials: 'include'
            })
            const data = await res.json()
            const { name, email, phone, work, _id } = data
            setUserData({
                name,
                email,
                phone,
                work,
                id: _id
            })
            if (!res.status === 200) {
                const err = new Error(res.error)
                throw err
            }
        } catch (err) {
            console.log(err);
            navigate('/login')
        }
    }
    useEffect(() => {
        callAboutPage()
    }, [])

    return (
        <>
            <div className="container empProfile">
                <form action="" method='GET'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profileImg">
                                <img src="" alt="photo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profileHead">
                                <h5>
                                    {userData.name}
                                </h5>
                                <h6>
                                    {userData.work}
                                </h6>
                                <p className="profileRating mt-3 mb-5">
                                    RANKING: <span>1/5</span>
                                </p>
                                <ul className="nav nav-tabs" role='tablist'>
                                    <li className="nav-item">
                                        <a href="#home" className="nav-link active" id='home-tab' data-toggle='tab' role='tab'>
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#profile" className="nav-link active" id='profile-tab' data-toggle='tab' role='tab'>
                                            Timeline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" name="btnAddMore" id="" className='profileEditBtn' value='Edit Profile' />
                        </div>
                    </div>
                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profileWork">
                                <p>
                                    Work Link
                                </p>
                                <a href="youtube.com">
                                    Youtube
                                </a>
                                <br />
                                <a href="youtube.com">
                                    IG
                                </a>
                                <br />
                                <a href="youtube.com">
                                    Twitter
                                </a>
                                <br />
                                <a href="youtube.com">
                                    FB
                                </a>
                                <br />
                                <a href="youtube.com">
                                    Linkedin
                                </a>
                                <br />
                                <a href="youtube.com">
                                    Website
                                </a>
                            </div>
                        </div>
                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 aboutInfo">
                            <div className="tab-content profileTab" id='myTabContent'>
                                <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                User ID
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.id}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Name
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Email
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Profession
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.work}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Intermediate
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Hourly Rate
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                $60
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Email
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Profession
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userData.work}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About