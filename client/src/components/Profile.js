import { useHistory } from "react-router-dom";
function Profile({ user, setUser }) {
    const history = useHistory()

    const handleLogout = () => {
        setUser({})
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push("/Login")
    }
    return (
        <>
        </>
    )
}

export default Profile