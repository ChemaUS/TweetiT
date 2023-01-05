import { useState } from 'react'
import { Link } from "react-router-dom";

function Signup({ user, setUser }) {

    const [error, setError] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState('')

    const handleLogin = (e) => {

        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email, password_confirmation: passwordConfirmation })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(setUser)
                } else {
                    res.json().then(e => setError(Object.entries(e.error).flat()))
                }

            })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)
    const handleChangeEmail = e => setEmail(e.target.value)

    return (
        <div className='login-box'>

            <h2>Signup:</h2>

            <form onSubmit={handleLogin}>

                <p style={{ color: 'red' }}>{error ? error : null}</p>

                <div className='user-box'>

                <input
                    type="text" onChange={handleChangeUsername} value={username} placeholder='username'
                />

                    <label >Username:</label>

                </div>


                <div className='user-box'>

                <input
                    type="text" onChange={handleChangeEmail} value={email} placeholder='email'
                />
                    <label>Email:</label>

                </div>

                <div className='user-box'>

                <input
                    type="password" onChange={handleChangePassword} value={password} placeholder='password'
                />

                    <label>Password:</label>

                </div>

                <div className='user-box'>

                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="password"
                />

                    <label>Confirm Password:</label>

                </div>

                <div className='button-form'>

                <input
                        className="submit" type="submit" value="Signup"
                />
                    <button className='submit'>

                        <Link className="login" to="/">
                            Login
                        </Link>
                    </button>
                </div>

            </form>

        </div>
    )
}

export default Signup