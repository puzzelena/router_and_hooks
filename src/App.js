import { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'


function App() {

  const [login, setLogin] = useState(false)


  return (
    <BrowserRouter> {/*basename is used for homepage to indicate the route and name after slash*/}
      <div className="App">
        <Header />

      <button onClick={() => setLogin(!login)}> { login ? "logout" : "login" } </button>


      <Switch>
        <Route path='/' component={Home} exact/> {/* Homepage '/' */}
        <Route path='/about' component={About} />
        {/* create REDIRECT to restrict acces */}
        <Route path='/profile'>
          { login ? <Profile /> : <Redirect to='/' />}
        </Route>
        <Route path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
