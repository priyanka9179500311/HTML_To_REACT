import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Layout from './components/Layout';  

import { BrowserRouter as Router ,Route } from 'react-router-dom';


function App() {
  return (
   <Router>
     <Route path="/" exact component={Home}></Route>
     <Route path="/aboutus" component={Aboutus}></Route>
   </Router>
  );
}

export default App;
