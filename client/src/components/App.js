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
          <div className='background-div'>
        <nav className='landing-page-nav'>
            <h1 className='title'>Welcome to TweeTiT</h1>
          </nav>
            <div className='landing-div'>
              <h1>Follow your interest.</h1>
              <h1>Hear what people are talkin about</h1>
              <h1>Elon Musk Free </h1>
            </div>
            <img className='background-img' src="https://as2.ftcdn.net/v2/jpg/01/22/48/31/1000_F_122483102_dY6XaAhfyXYDECNtIrtvv4AtHwmJz3DT.jpg" alt='' />
            <div className="vl"></div>

            <div className="landing-button-div">
              <button className="start">

            <Link className="login" to="/Login">
              Get Started
            </Link>
          </button>
            </div>
          </div>
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
