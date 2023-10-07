import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <div id="notFound">
            <div className="notFound">
                <div className="notFound404">
                    <h1>
                        404
                    </h1>
                    <h2>
                        Sorry, this page doesn't exist
                    </h2>
                    <p className="mb-5">
                        the pagre you are looking for might have  been removed or it is temporarily unavailable
                    </p>
                    <NavLink to='/'>
                        Go to Home
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error404