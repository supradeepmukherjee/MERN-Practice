import { useEffect, useState } from "react"

const Home = () => {
    const [name, setName] = useState('')
    const [loggedin, setLoggedin] = useState(false)
    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:3300/about', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            const data = await res.json()
            setName(data.name)
            setLoggedin(true)
            if (!res.status === 200) {
                const err = new Error(res.error)
                throw err
            }
        } catch (err) {
            console.log(err);
            // navigate('/login')
        }
    }
    useEffect(() => {
        callAboutPage()
    }, [])
    return (
        <div className="homePage">
            <div className="homeDiv">
                <h2 className="pt-5">
                    Welcome
                </h2>
                <p>
                    {name}
                </p>
                <h1>
                    {loggedin ? 'Happy to see you back!' : 'We are the Programmers'}
                </h1>
            </div>
        </div>
    )
}

export default Home