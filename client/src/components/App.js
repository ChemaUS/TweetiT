import { useState, useEffect } from 'react'
import { Switch, Route, Link } from "react-router-dom";

import Login from './Login'
import Signup from './Signup'
import HomePage from "./HomePage";

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

  return (
    <div className="landing-page">
      <Switch>
        <Route exact path="/">
        <nav className='landing-page-nav'>
            <h1 className='title'>Welcome to TweeTiT</h1>
          </nav>
          <button className="">

            <Link className="login" to="/Login">
              Get Started
            </Link>
          </button>
        </Route>

        <Route exact path="/Login">
          <nav className='landing-page-nav'>
          <h1 className='title'>Welcome to TweeTiT</h1>
          </nav>
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/Signup">
          <nav className='landing-page-nav'>

            <h1 className='title'>Welcome to TweeTiT</h1>
          </nav>
          <Signup user={user} setUser={setUser} />
        </Route>

        <Route exact path="/HomePage">
          <HomePage user={user} setUser={setUser} />
        </Route>


      </Switch>

    </div>
  );
}

export default App;
