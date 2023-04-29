import '../Styles/Cart.css'
import { Link } from "react-router-dom"
import {React} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'


const Cart = ({cartItems, handleAddItem, handleRemoveItem}) => {

   const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

   let Rand = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
});

  return (
 <div className='cart'>
   <div className='cartItems'>
    <div className='cartItemsHeader'>Shopping Cart</div>
    {cartItems.length === 0 && (
    <div className='empty'>Your cart is currently empty, view our {<Link to="/Ecommerce-store/products"
    className="toMenu">Products</Link>} </div>
    )}

    <div>
       {cartItems.map((item)=>(
          <div key={item.id} className="cartList">
            <img 
               className='itemImg' 
               src={item.imgUrl} 
               alt={item.name}
            />
            <div className='itemName'>{item.name}</div>
            <div>Qty:  {item.quantity}</div>
            <div>
              <button className='btnAdd' onClick={()=>handleAddItem(item)}>
                +
              </button>
              <button className='btnAdd' onClick={()=> handleRemoveItem(item)}>
                -
              </button>
            </div>
             
            <div>{Rand.format(item.price * (item.quantity))}</div>

          </div>
       ))}
       <hr />
    </div>
        {cartItems.length > 0 && (<div className='totalPrice'>Total price: {Rand.format(totalPrice)}</div>)}
        
        {cartItems.length > 0 && (<Link to="/checkout" className='btn'>Proceed to Checkout</Link> )}
   </div>
        
      {cartItems.length > 0 &&(
        <div>
          <Link to="/Ecommerce-store/products"
           className="btnBack"><IoMdArrowRoundBack size="1.5rem"/> Back</Link>  
        </div>
      )}
   </div>
  )
}
export default Cart