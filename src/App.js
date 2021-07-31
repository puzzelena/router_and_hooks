import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'


function App() {
  return (
    <BrowserRouter forceRefresh> {/*basename is used for homepage to indicate the route and name after slash*/}
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path='/' component={Home} exact/> {/* Homepage '/' */}
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
