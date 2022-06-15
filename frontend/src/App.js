import React from 'react';
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import RegisterUser from './components/RegisterUser'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/registeruser' element={<RegisterUser />} />
        <Route path='/users' element={<UserScreen />} />
      </Routes>
    </Router>
  </>
}

export default App;
