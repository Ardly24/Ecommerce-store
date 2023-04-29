import '../Styles/Cart.css'
import { Link } from "react-router-dom"
import {React} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'


const WishList = ({wishItems, handleRemoveItem, handleAddItem, handleRemoveWishItem}) => {

const totalPrice = wishItems.reduce((price, item) => price + item.quantity * item.price, 0)

let Rand = new Intl.NumberFormat('en-ZA', {
   style: 'currency',
   currency: 'ZAR',
});

  return (
 <div className='cart'>
   <div className='cartItems'>
    <div className='cartItemsHeader'>Wish List</div>
    {wishItems.length === 0 && (
    <div className='empty'>Your Wish List is currently empty, view our {<Link to="/Ecommerce-store/products"
    className="toMenu">Products</Link>} </div>
    )}

    <div>
       {wishItems.map((item)=>(
          <div key={item.id} className="cartList">
            <img 
               className='itemImg' 
               src={item.imgUrl} 
               alt={item.name}
            />
            <div className='itemName'>{item.name}</div>
            <div className='items'>
            <div>{Rand.format(item.price * (item.quantity))}</div>
               <button className='btnAdd wish' onClick={() =>{handleAddItem(item), handleRemoveWishItem(item)}}>Add to cart</button>
               <button className='btnAdd wish' onClick={()=> handleRemoveWishItem(item)}>Remove</button>
            </div>
             
          </div>
       ))}
       <hr />
    </div>
        {wishItems.length > 0 && (<div className='totalPrice'>Total price:  {Rand.format(totalPrice)}</div>)}       
   </div>
   
      {wishItems.length > 0 &&(
        <div>
          <Link to="/Ecommerce-store/products"
           className="btnBack"><IoMdArrowRoundBack size="1.5rem"/> Back</Link>  
        </div>
      )} 
   </div>
  )
}
export default WishList