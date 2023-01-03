import { useState } from 'react'

function Signup({ user, setUser }) {

    const [errors, setErrors] = useState([])
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
                    res.json().then(e => setErrors(Object.entries(e.error).flat()))
                }

            })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)
    const handleChangeEmail = e => setEmail(e.target.value)

    return (
        <div>
            <form onSubmit={handleLogin}>

                <p>Signup:</p>

                <input
                    type="text" onChange={handleChangeUsername} value={username} placeholder='username'
                />

                <input
                    type="text" onChange={handleChangeEmail} value={email} placeholder='email'
                />

                <input
                    type="password" onChange={handleChangePassword} value={password} placeholder='password'
                />

                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />

                <input
                    type="submit" value="Signup"
                />

            </form>
        </div>
    )
}

export default Signup