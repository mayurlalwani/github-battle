import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import User from './Components/Users/User'
import Alert from './Components/Layout/Alert'
import About from './Components/Pages/About'
import GithubState from './Context/Github/GithubState'
import AlertState from './Context/alert/AlertState'
import Home from './Components/Pages/Home'
import NotFound from './Components/Pages/NotFound'
import './index.css'

function App() {
  // async componentDidMount(){
  //   setState({loading: true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setState({
  //     users: res.data,
  //     loading: false
  //   })
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
    </AlertState>
    </GithubState>
  );
  
}
export default App;
