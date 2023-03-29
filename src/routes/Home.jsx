import {React, useState} from 'react'
import '../Styles/Navbar.css'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Home = ({cartItems, wishItems}) => {
  return (
    <div>
        <Navbar  size={cartItems.length} wish={wishItems.length}/>
        <HeroImg />
        <Footer />
    </div>
  )
}

export default Home