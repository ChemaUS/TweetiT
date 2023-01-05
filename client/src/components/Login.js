import { useState } from 'react'
import { Link } from "react-router-dom";


function Login({ user, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {

                    setUser(data)
                } else if (data.errors) {
                    setError(data.errors)
                }
            })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    if (user && user.id) {
        return (
            <div>
                Welcome {user.username}!
            </div>
        )
    }

    return (
        <div className='login-box'>

            <h2>Login:</h2>

            <form onSubmit={handleLogin}>

                <p style={{ color: 'red' }}>{error ? error : null}</p>

                <div className='user-box'>

                <input
                        type="text" name='' required='' onChange={handleChangeUsername} value={username} placeholder='username'
                />

                    <label>Username:</label>

                </div>

                <div className='user-box'>

                <input
                    type="text" onChange={handleChangePassword} value={password} placeholder='password'
                />

                    <label>Password:</label>

                </div>

                <div className='button-form'>

                    <input 
                        className='submit' type="submit" value="Login"
                />
                    <button className='submit '>
                        <Link className="signup" to="/Signup">
                            Signup
                        </Link>

                    </button>
                </div>

            </form>


        </div>
    )
}

export default Login