import '../Styles/HeroImg.css'
import {React, useState, useEffect} from 'react'
import heroImgData from './heroImgData'
import { Link } from "react-router-dom"
import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'

const HeroImg = () => {

 const [currentSlide, setCurrentSlide]=useState(0)
 const slideLength = heroImgData.length

 const autoScroll =true
 let slideInterval
 let intervalTime = 5000

 const nextSlide = () =>{
  setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide +1)
 }

 const prevSlide = () =>{
  setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
 }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
  }

 useEffect(() => {
  setCurrentSlide(0)
 }, [])

 useEffect(() => {
  if (autoScroll){
    auto()
  }
  return () => clearInterval(slideInterval)
 }, [currentSlide])

  const heroImageList = heroImgData.map((slide)=>{
    return(
        <>
        <div className='slide' key={slide.id}>
          {slide.id === currentSlide &&(
           <img className='slide-img' src={slide.image}/>
          )}
        </div>
        {slide.id === currentSlide &&(
        <div className="content">
        <p>{slide.line1}</p>
          <h1>{slide.heading}</h1>
          <p>{slide.line2}</p>
          <div>
         <Link to="/products"
            className="btn">Buy now</Link>  
         </div>
       </div> )}
       </>
    )
  })

  return(  
    <div className='hero'> 
     <div className="mask">
       <div>
         <BsArrowLeftCircle className='arrow prev' onClick={prevSlide}/>
        <BsArrowRightCircle className='arrow next' onClick={nextSlide}/>
      </div>
     {heroImageList}
     </div>
    </div>    
)
}

export default HeroImg