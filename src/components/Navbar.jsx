import '../Styles/Navbar.css'
import {TiShoppingCart} from 'react-icons/ti'
import {BsPersonCircle, BsHeart, BsSearch } from 'react-icons/bs'
import {React, useState, useRef} from 'react'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import {FaBars,FaTimes,FaSearch } from 'react-icons/fa'

export default function Navbar(props){
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const [searchInput, setSearchInput] = useState("")

    const [color, setColor]=useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
           setColor(false)
        }
    }


    const products =[
      {name: "Apple laptops", path:"/products#mac"},
      {name: "HP laptops", path:"/products#hp"},
      {name: "Lenovo laptops", path:"/products#lenovo"},
      {name: "Samsung phones", path:"/products#samsung"},
      {name: "Apple iphones", path:"/products#hp"},
      {name: "Huawei Phones", path:"/products#lenovo"},
      {name: "Amazon Kindle Tablets", path:"products#amazon"},
      {name: "Apple iPads", path:"products#lenovo"},
      {name: "Samsung Galaxy Tablets", path:"products#mac"},
      {name: "Canon Printers", path:"products#hp"},
      {name: "Epson Printers", path:"products#lenovo"},
      {name: " HP Printers", path:"products#mac"},
      {name: "Dell Monitors", path:"products#dell"},
      {name: "Asus Monitors", path:"products#asus"},
      {name: "LG Monitors", path:"products#LG"},
    ]

    const getFilteredItems= (searchInput, products) =>{
      if(!searchInput){
        return products
      }
      return products.filter(prod => prod.name.includes(searchInput))
    }

    const filteredItems = getFilteredItems(searchInput, products)

  window.addEventListener("scroll", changeColor);
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/Ecommerce-store" className='logo1'>
            <img className='logo' src={logo}/>
            <h1>ardly.</h1>
           </Link>
           
          
        <ul className={click ? 'nav-menu active': 'nav-menu'}>

            <li>
                <Link to="/products">Browse Products</Link>
                <ul className='submenu'>
                    <li> <a href=''>Laptops</a>
                      <ul className='submenu2'>
                        <li><HashLink to='/products#mac'smooth>Apple</HashLink></li>
                        <li> <HashLink to='/products#hp' smooth>HP</HashLink></li>
                        <li> <HashLink to='/products#lenovo' smooth>Lenovo</HashLink></li>
                      </ul>
                    </li>

                    <li> <a href='#'>Phones</a>
                    <ul className='submenu2'>
                        <li><HashLink to='/products#samsung'smooth>Samsung</HashLink></li>
                        <li><HashLink to='/products#iphone'smooth>Apple iPhones</HashLink></li>
                        <li><HashLink to='/products#huawei'smooth>Huawei</HashLink></li>
                      </ul>
                    </li>
                    
                    <li> <a href='#'>Tablets</a>
                    <ul className='submenu2'>
                        <li><HashLink to='/products#amazon'smooth>Amazon Kindle</HashLink></li>
                        <li><HashLink to='/products#ipad'smooth>Apple iPads</HashLink></li>
                        <li><HashLink to='/products#galaxyTab'smooth>Galaxy Tab</HashLink></li>
                      </ul>
                    </li>

                    <li> <a href='#'>Printers</a>
                    <ul className='submenu2'>
                       <li><HashLink to='/products#canon'smooth>Canon</HashLink></li>
                       <li><HashLink to='/products#epson'smooth>Epson</HashLink></li>
                       <li><HashLink to='/products#hpPrinter'smooth>HP</HashLink></li>
                      </ul>
                    </li>

                    <li> <a href='#'>Monitors</a>
                    <ul className='submenu2'>
                        <li><HashLink to='/products#dell'smooth>DELL</HashLink></li>
                        <li><HashLink to='/products#asus'smooth>ASUS</HashLink></li>
                        <li><HashLink to='/products#LG'smooth>LG</HashLink></li>
                      </ul>
                    </li>
                </ul>
            </li>

            <div className='search'>
           <input type="text" className='searchProduct' 
                placeholder=" Enter your product name"
                 value= {searchInput}
                 onChange={(e) => setSearchInput(e.target.value)}
                 
              />
           <button className="searchButton"> <BsSearch color='gray'/> </button> 
           </div>
           
           <div className='searchItems'>
                {
                  filteredItems.map(value =><HashLink to={value.path}><p>{value.name}</p></HashLink>)
                }
              </div>
           

           <li>
                <Link to="/Ecommerce-store">Home</Link>
            </li> 

            <li>
                <Link to="/about">About Us</Link>
            </li>
            <div className='signin'>
           <li> 
                <Link to="/login"><BsPersonCircle size='1.5rem'/></Link>
            </li>
            </div>
           <li> 
                <Link to="/wishList"><BsHeart size='1rem'/></Link>
                <span className='items-count'>{props.wish}</span>
            </li>

            <li>
                <Link to="/cart"><TiShoppingCart size='1rem'/></Link>
                <span className='items-count'>{props.size}</span>
            </li>
            </ul>

        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes  size={20} style={{color: "#fff"}}/>):
              (<FaBars  size={20} style={{color: "#fff"}}/>)
              }
        </div>

</div>               
    )
}