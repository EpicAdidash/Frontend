import React,{useState,createContext,useContext} from 'react'
import './App.css';
import HomePage from './pages/Home page'
import Register from './pages/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Notes from './pages/Notes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() {
  const noteContext = Login.noteContext
  const logged = Login.logged
  const setlogged = Login.setlogged
  setlogged(logged+1)
  return (
     <Router>
       <noteContext.Provider value={logged}>
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/notes" element={<Notes/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       </Routes>
       </noteContext.Provider>
     </Router>
  );
}

export default App;
