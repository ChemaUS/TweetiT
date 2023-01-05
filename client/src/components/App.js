import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";

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
    <div className="landing-page">
      <Route exact path="/">
        <nav className='landing-page-nav'>

          <h1 className='title'>Welcome to TweeTiT</h1>
        </nav>
        <Login user={user} setUser={setUser} />

      </Route>
      <Switch>
        <Route path="/Signup">
          <nav className='landing-page-nav'>

            <h1 className='title'>Welcome to TweeTiT</h1>
          </nav>
      <Signup user={user} setUser={setUser} />
        </Route>
      </Switch>
      <Profile user={user} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
