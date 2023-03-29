import '../Styles/Cart.css'
import { Link } from "react-router-dom"
import {React} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'


const WishList = ({wishItems, handleRemoveItem, handleAddItem}) => {


   const totalPrice = wishItems.reduce((price, item) => price + item.quantity * item.price, 0)

  return (
 <div className='cart'>
    <h1>{wishItems.length}</h1>
   <div className='cartItems'>
    <div className='cartItemsHeader'>Wish List</div>
    {wishItems.length === 0 && (
    <div className='empty'>Your Wish List is currently empty, view our {<Link to="/products"
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
            <div>
               <button className='btnAdd' onClick={() =>handleAddItem(item)}>Add to cart</button>
               <button className='btnAdd' onClick={()=> handleRemoveItem(item)}>Remove</button>
            </div>
             
            <div>R {item.price * (item.quantity)}</div>
          </div>
       ))}
       <hr />
    </div>
        {wishItems.length > 0 && (<div className='totalPrice'>Total price:  R {totalPrice}</div>)}       
   </div>
   
      {wishItems.length > 0 &&(
        <div>
          <Link to="/products"
           className="btnBack"><IoMdArrowRoundBack size="1.5rem"/> Back</Link>  
        </div>
      )} 
   </div>
  )
}
export default WishList