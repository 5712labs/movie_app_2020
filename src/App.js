import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Navigation from './components/Navigation'
import Detail from './routes/Detail';

function App() {
  // return <Home></Home>
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
      {/* <Route path="/home"><h1>Home</h1></Route>
      <Route path="/home/introduction"><h1>Introduction</h1></Route>
      <Route path="/about"><h1>About</h1></Route> */}
    </HashRouter>
  );
}

export default App;