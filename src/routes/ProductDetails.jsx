import '../Styles/ProductDetails.css'
import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import {BsHeart,BsArrowRepeat, BsStar, BsTruck} from 'react-icons/bs'
import {GiReturnArrow} from 'react-icons/gi'
import {SlHome} from 'react-icons/sl'
import { Link } from 'react-router-dom'


const ProductDetails = ({handleAddItem, viewProduct, AddWishListItem}) => {

  let Rand = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ZAR',
});

  return (
    <div>
      {viewProduct.map((item)=>(
    <div className='productDetails' key={item.id}>
       <img className='product-img'src={item.imgUrl}/>
       <div className='productDescription'>
          <h2 className='product-name'>{item.name}</h2>
          <div className='itemPrice'>
          <p className='price'>{Rand.format(item.price)}</p>
          {(item.wasPrice) && <p className='wasPrice'>Was {Rand.format(item.wasPrice)}</p>}
          <Link to="/cart"
         className="btn" onClick={() =>handleAddItem(item)}><TiShoppingCart size='1rem'/> Go to cart</Link>
         <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
         <Link to="wishList" className='add-to-wish' onClick={() =>AddWishListItem(item)}><BsHeart size='1.5rem'/></Link>
         </div>
          <h3>key features</h3>
          <ul>
            <li>{item.keyFeatures.RAM}</li>
            <li>{item.keyFeatures.drive}</li>
            <li>{item.keyFeatures.processor}</li>
            <li>{item.keyFeatures.screenSize}</li>
            <li>{item.keyFeatures.OS}</li>
            <li>{item.keyFeatures.warranty}</li>
          </ul>
          <div className='icons'>
          <p><GiReturnArrow size='1.5rem'/> Returnable</p>
          <p><BsArrowRepeat size='1.5rem'/> Store exchange</p>
          <p><BsStar size='1.5rem'/> 1 Year Warranty</p>
          </div>

          <div className='delivery'>
            <p><BsTruck size='1.2rem'/> Get this product delivered to your doorstep within  5 days</p>
            <p><SlHome size='1.2rem'/> Store pick-up - <a href="#">Check availabilility</a></p>
          </div>
        </div>
         {/* <img className='product-img'src="https://cdn.shopify.com/s/files/1/0082/7339/5794/products/hp250-i5-8-gb-256-ssd-15-6-w10-p-2v0w6es-1-29177681903698.png?v=1660737902"/>

        <div className='productDescription'>
          <h2>HP INTEL CORE I7 LAPTOP 16GB 512 SSD</h2> 
          <div className='itemPrice'>
          <p className='price'>R15 999.00</p>
          <p className='wasPrice'>Was R17 999.00</p>
          <Link to="/cart"
         className="btn"> <TiShoppingCart size='1rem'/> Add to cart</Link>
         <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
         <Link to="" className='add-to-wish'><BsHeart size='1.5rem'/></Link>
         </div>
          <h3>key features</h3>
          <ul>
            <li>16GB RAM</li>
            <li>512 GB SSD</li>
            <li>Intel Core i7-1065G7 Processor</li>
            <li>15.6 inch Sceen size</li>
            <li>Windows 11 Home</li>
            <li>1 Year Warranty</li>
          </ul>
          <div className='icons'>
          <p><GiReturnArrow size='1.5rem'/> Returnable</p>
          <p><BsArrowRepeat size='1.5rem'/> Store exchange</p>
          <p><BsStar size='1.5rem'/> 1 Year Warranty</p>
          </div>

          <div className='delivery'>
            <p><BsTruck size='1.5rem'/> Get this product delivered to your doorstep within  5 days</p>
            <br/>
            <p><SlHome size='1.5rem'/> Store pick-up - <a href="#">Check availabilility</a></p>
          </div>
        </div>   */}
    </div>
    ))}
     </div>
  )
}

export default ProductDetails