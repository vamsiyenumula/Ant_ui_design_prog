// App.js
import React , { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './SignInPage';
import Spinner from './spinner'
import Just from './just'
import Drawers from './drawer'
import RegisterPage from './RegisterPage';
import Menus from './menu';
// Menu

const App = () => {
  return (
    <>
    <Menus/>
    <Drawers/>
    <Router>
      <Routes>
        <Route path="/signin" element = {<SignInPage/>} />
        <Route path="/spin" element = {<Spinner/>}/>
        {/* <Route path="/just" element = {<Just/>} /> */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
