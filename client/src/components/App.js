import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me")
      .then(res => {
        if (res.ok) {
          res.json().then(data => setUser(data))
        } else {
          // \navigate('/signup')
        }
      })
  }, [])

  const handleLogout = () => {
    setUser({})
    fetch('/logout', {
      method: 'DELETE'
    })
  }

  return (
    <div className="App">

      <button>
        <Link className="" to="/Login">
          Login
        </Link>
      </button>
      <button>
        <Link className="" to="/Signup">
          Signup
        </Link>
      </button>

      <Switch>
        <Route path="/Login">
      <Login user={user} setUser={setUser} />
        </Route>

        <Route path="/Signup">
      <Signup user={user} setUser={setUser} />
        </Route>
      </Switch>
      <Profile user={user} />
      <button onClick={handleLogout}>Logout</button>


    </div>
  );
}

export default App;
