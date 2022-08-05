import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
 
  return (
    <>
      
        <div className="text-container">
            <h1>Get Your Meal Plan</h1>
            <h2>You have a lot on your plate, let Favoreats help with dinner</h2>
            <p>Take a few minutes to tell us about your dinner goals and preferences, and we will create a meal plan and suggestions for you that draw from recipes you already have and from our database of over 1 million recipes!</p>
            <button onClick={()=>navigate("/recipes")} className="get-meal-btn">Get Meal Plan</button>
            
        </div>
        
    </>
  )
}
