import '../Styles/Footer.css'
import React from 'react'
import logo from '../assets/logo3.png'
import {BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {

  const now = new Date()
  let year = now.getFullYear();
  return (
    <div className='footer'>
      <div>
        <Link to="/" className='logo1'>
            <img className='logo2' src={logo}/>
            <h1>ardly.</h1>
           </Link>
           <h3>Contact</h3>
           <p>Address:  83 Rivonia Rd, Sandton, 2196 JHB, South Africa </p>
           <p>Phone: +27 813 399459</p>
           <a href = "mailto: ardlightg@gmail.com">Email: ardlightg@gmail.com</a>
           <br/>
           <br/>
           <h3>Follow us</h3>
            <div className='socialMedia-icons'>
            <BsFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
            <RiInstagramFill className='icon'/>
            </div>   
            
           </div>
           <div className='abt'>
            <h3>About</h3>
            <a href='/Ecommerce-store/about'>About Us</a>
            <a href='#'>Delivery Information</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms & Conditions</a>
            <div className='copyRight'>
            <h4> &copy; {year} ardly-tech.com</h4>
            </div>
           </div>
           <div className='account'>
            <h3>My Account</h3>
            <a href='/Ecommerce-store/login'>Sign In</a>
            <a href='/Ecommerce-store/cart'>View Cart</a>
            <a href='/Ecommerce-store/wishList'>My Wishlist</a>
            <a href='#'>Track My Order</a>
            <a href='#'>Help</a>
           </div>

           <div>
            <p>Secured Payment Gateways</p>
            <img className='logo' src='https://financialit.net/sites/default/files/visa-mastercard-amex_0.png'/>
           </div>
    </div>
  )
}

export default Footer