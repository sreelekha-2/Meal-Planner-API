import React,{useState,useEffect} from 'react'

export default function Meal(props) {

    const [imageUrl,setImageUrl]=useState("")
    const {mealDetails}=props
    const {id,title,sourceUrl,readyInMinutes,servings}=mealDetails
    // useEffect(()=>{
    //     fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d3a170292f36478395ea6a60374ef93f`)
    //     .then(res=>res.json())
    //     .then(data=>setImageUrl(data.image))
    // },[])
  return (
    <>

        <p>Title : {title}</p>
        <img src={imageUrl} alt="recipe" className="recipe-img"/>
        <p>Ready Time : {readyInMinutes} mins</p>
        <p>Servings : {servings}</p>
        <a href={sourceUrl} target="_blank" className="url">Get Recipe</a>
    </>

  )
}
