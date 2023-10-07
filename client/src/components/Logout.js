import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../App"

const Logout = () => {
    const { dispatch } = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:3300/logout', {
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            dispatch({ type: 'USER', payload: false })
            navigate('/login')
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>

        </>
    )
}

export default Logout