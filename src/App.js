import React,{useState,useEffect} from 'react'
import MealData from './components/MealData'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import MealList from './components/MealList'
import Navbar from './components/Navbar'

export default function App() {
  
  return (
    <div className="container">
       
        <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<MealList/>}/>
        </Routes>
        </Router>
       
       
    </div>
  )
}

