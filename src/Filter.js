import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses'
import StarRatingComponent from 'react-star-rating-component';


function Filter() {
  const [Film,setFilm]=useState([
    {title:"Avatar", rate:5,image:"https://img.seriebox.com/films/30/30006/affich_30006_4.jpg?id=463",description:" Action"},
    {title:"titanic", rate:3,image:"https://cf.ltkcdn.net/kids/images/std/236793-1600x1200-titanic.jpg",description:"cool"},
    {title:"la rafle", rate:4,image:"https://wwv.stockholm-sardou.fr/posters/pics/La-Rafle-Film-2010.jpg",description:"cool"}
   

])
const [filterdFilm,setFilter]=useState(Film)
useEffect(() =>{
  setFilm(Film)
},[Film])
const filtrer=()=>{
  setFilter(Film.filter(e=>e.title.toUpperCase().includes(search.current.value.toUpperCase())))

}
const search=useRef()

const R1=useRef()
const R2=useRef()
const R3=useRef()
const R4=useRef()
const  addFilm=()=>{

        setFilter([...Film,{title:R1.current.value,rate:R2.current.value,image:R3.current.value,description:R4.current.value}])
    }

const changeRate=(x)=>{
  setRate(x)
  setFilter(Film.filter(e=>e.rate>=x))

}
const [rate,setRate]=useState(0)

  return (
    <div>
      <div>
       <input  ref={R1} type='text' placeholder='enter title'></input>
        <input ref={R2} type='text' placeholder='enter rate'></input>
        <input ref={R3} type='text' placeholder='enter image'></input>
        <input ref={R4} type='text' placeholder='enter description'></input>
        <div>
    <input type={'search'} placeholder="enter your search" ref={search} onChange={filtrer}></input>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={changeRate}
        
        />
    
 
  </div>
        <button onClick={addFilm}>+</button>
      </div>
      <div className='fatma'>
            {filterdFilm.map(e=><MovieCard movie={e}></MovieCard>
)}
      </div>
    
    </div>
    )
  

    }
export default Filter
