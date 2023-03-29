import '../Styles/Products.css'
import '../Styles/ProductDetails.css'
import {React, useState, useRef} from 'react'
import {BsHeart,BsFillHeartFill, BsArrowRepeat, BsStar, BsTruck} from 'react-icons/bs'
import {GiReturnArrow} from 'react-icons/gi'
import {TiShoppingCart} from 'react-icons/ti'
import {SlHome} from 'react-icons/sl'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Products = ({wishItems, macbooks,Hp,Lenovo, samsung, iPhones, Huawei, Amazon, GalaxyTab, iPad, toggleModal, showProduct, modal, handleAddItem, viewProduct,cartItems, AddWishListItem,
Canon, HpPrinter, Epson, Dell, LG, Asus}) => {

  let Rand = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
});

 const [isShown, setIsShown] = useState(false)
 function toggleShown(){
  setIsShown(prevShown => !prevShown)
 }

  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  //////////////////////////LAPTOPS////////////////////////////////////////////////////////
  const macList = macbooks.map((mac) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(mac)} key={mac.id}>
        <img src={mac.imgUrl}/>
        <p>{mac.name}</p>
        <p className='product--price'>{Rand.format(mac.price)}</p>
        {(mac.wasPrice) && <p className='wasPrice'>Was {Rand.format(mac.wasPrice)}</p>}
      </div>
    )
  })

  const HpList = Hp.map((hp) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(hp)} key={hp.id} >
      <img src={hp.imgUrl}/>
      <p>{hp.name}</p>
      <p className='product--price'>{Rand.format(hp.price)}</p>
      {(hp.wasPrice) && <p className='wasPrice'>Was {Rand.format(hp.wasPrice)}</p>}
    </div>
    )
  })

  const lenovoList = Lenovo.map((leno) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(leno)} key={leno.id} >
      <img src={leno.imgUrl}/>
      <p>{leno.name}</p>
      <p className='product--price'>{Rand.format(leno.price)}</p>
        {(leno.wasPrice) && <p className='wasPrice'>Was {Rand.format(leno.wasPrice)}</p>}
    </div>
    )
  })

   /////////////////////////////PHONES////////////////////////////////////////////////////////
   const samsungList = samsung.map((sam) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(sam)} key={sam.id} >
      <img src={sam.imgUrl}/>
      <p>{sam.name}</p>
      <p className='product--price'>{Rand.format(sam.price)}</p>
        {(sam.wasPrice) && <p className='wasPrice'>Was {Rand.format(sam.wasPrice)}</p>}
    </div>
    )
  })

  const iPhoneList = iPhones.map((iphone) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(iphone)} key={iphone.id} >
      <img src={iphone.imgUrl}/>
      <p>{iphone.name}</p>
      <p className='product--price'>{Rand.format(iphone.price)}</p>
        {(iphone.wasPrice) && <p className='wasPrice'>Was {Rand.format(iphone.wasPrice)}</p>}
    </div>
    )
  })

  const huaweiList = Huawei.map((huaw) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(huaw)} key={huaw.id} >
      <img src={huaw.imgUrl}/>
      <p>{huaw.name}</p>
      <p className='product--price'>{Rand.format(huaw.price)}</p>
      {(huaw.wasPrice) && <p className='wasPrice'>Was {Rand.format(huaw.wasPrice)}</p>}
    </div>
    )
  })

     /////////////////////////////TABLETS////////////////////////////////////////////////////////
     const amazonList = Amazon.map((kindle) =>{
      return(
        <div className='product--item' onClick={() =>showProduct(kindle)} key={kindle.id} >
        <img src={kindle.imgUrl}/>
        <p>{kindle.name}</p>
        <p className='product--price'>{Rand.format(kindle.price)}</p>
        {(kindle.wasPrice) && <p className='wasPrice'>Was {Rand.format(kindle.wasPrice)}</p>}
      </div>
      )
    })

    const galaxyTabList = GalaxyTab.map((galaxy) =>{
      return(
        <div className='product--item' onClick={() =>showProduct(galaxy)} key={galaxy.id} >
        <img src={galaxy.imgUrl}/>
        <p>{galaxy.name}</p>
        <p className='product--price'>{Rand.format(galaxy.price)}</p>
        {(galaxy.wasPrice) && <p className='wasPrice'>Was {Rand.format(galaxy.wasPrice)}</p>}
      </div>
      )
    })

    const iPadList = iPad.map((ipad) =>{
      return(
        <div className='product--item' onClick={() =>showProduct(ipad)} key={ipad.id} >
        <img src={ipad.imgUrl}/>
        <p>{ipad.name}</p>
        <p className='product--price'>{Rand.format(ipad.price)}</p>
        {(ipad.wasPrice) && <p className='wasPrice'>Was {Rand.format(ipad.wasPrice)}</p>}
      </div>
      )
    })

     /////////////////////////////PRINTERS////////////////////////////////////////////////////////
   const canonList = Canon.map((cano) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(cano)} key={cano.id} >
      <img src={cano.imgUrl}/>
      <p>{cano.name}</p>
      <p className='product--price'>{Rand.format(cano.price)}</p>
        {(cano.wasPrice) && <p className='wasPrice'>Was {Rand.format(cano.wasPrice)}</p>}
    </div>
    )
  })

  const epsonList = Epson.map((ep) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(ep)} key={ep.id} >
      <img src={ep.imgUrl}/>
      <p>{ep.name}</p>
      <p className='product--price'>{Rand.format(ep.price)}</p>
        {(ep.wasPrice) && <p className='wasPrice'>Was {Rand.format(ep.wasPrice)}</p>}
    </div>
    )
  })

  const hpPrinterList = HpPrinter.map((hp) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(hp)} key={hp.id} >
      <img src={hp.imgUrl}/>
      <p>{hp.name}</p>
      <p className='product--price'>{Rand.format(hp.price)}</p>
        {(hp.wasPrice) && <p className='wasPrice'>Was {Rand.format(hp.wasPrice)}</p>}
    </div>
    )
  })

      /////////////////////////////MONITORS////////////////////////////////////////////////////////
      const dellList = Dell.map((dell) =>{
        return(
          <div className='product--item' onClick={() =>showProduct(dell)} key={dell.id} >
          <img src={dell.imgUrl}/>
          <p>{dell.name}</p>
          <p className='product--price'>{Rand.format(dell.price)}</p>
            {(dell.wasPrice) && <p className='wasPrice'>Was {Rand.format(dell.wasPrice)}</p>}
        </div>
        )
      })
    
   const asusList = Asus.map((asus) =>{
    return(
      <div className='product--item' onClick={() =>showProduct(asus)} key={asus.id} >
      <img src={asus.imgUrl}/>
      <p>{asus.name}</p>
      <p className='product--price'>{Rand.format(asus.price)}</p>
        {(asus.wasPrice) && <p className='wasPrice'>Was {Rand.format(asus.wasPrice)}</p>}
    </div>
    )
  })

      const LGList = LG.map((LG) =>{
        return(
          <div className='product--item' onClick={() =>showProduct(LG)} key={LG.id} >
          <img src={LG.imgUrl}/>
          <p>{LG.name}</p>
          <p className='product--price'>{Rand.format(LG.price)}</p>
            {(LG.wasPrice) && <p className='wasPrice'>Was {Rand.format(LG.wasPrice)}</p>}
        </div>
        )
      })
    


  return (
    <>
   <Navbar size={cartItems.length} wish={wishItems.length}/> 
    <div className='products'>
       <h1 className='productTitle'></h1> 
       <p className='category' id='mac'>Apple Macbook Laptops</p> 
    <div className='productList'>
           {macList}
    </div>

    <p className='category' id='hp'>HP Laptops</p> 
    <div className='productList'>
           {HpList}
    </div>

    <p className='category' id='lenovo'>Lenovo Laptops</p> 
    <div className='productList'>
           {lenovoList}
    </div>

    <p className='category' id='samsung'>Samsung Phones</p> 
    <div className='productList'>
           {samsungList}
    </div>

    <p className='category' id='iphone'>Apple iPhones</p> 
    <div className='productList'>
           {iPhoneList}
    </div>

    <p className='category' id='huawei'>Huawei Phones</p> 
    <div className='productList'>
           {huaweiList}
    </div>

    <p className='category' id='amazon'>Amazon Kindle Tablets</p> 
    <div className='productList'>
          {amazonList}
    </div>

    <p className='category' id='ipad'>Apple iPads</p> 
    <div className='productList'>
          {iPadList}
    </div>

    <p className='category' id='galaxyTab'>Samsung Galaxy Tablets</p> 
    <div className='productList'>
          {galaxyTabList}
    </div>

    <p className='category' id='canon'>Canon Printers</p> 
    <div className='productList'>
          {canonList}
    </div>

    <p className='category' id='epson'>Epson Printers</p> 
    <div className='productList'>
          {epsonList}
    </div>

    <p className='category' id='hpPrinter'>HP Printers</p> 
    <div className='productList'>
          {hpPrinterList}
    </div>
    
    <p className='category' id='dell'>Dell Monitors</p> 
    <div className='productList'>
          {dellList}
    </div>
    
    <p className='category' id='asus'>Asus Monitors</p> 
    <div className='productList'>
          {asusList}
    </div>

    <p className='category' id='LG'>LG Monitors</p> 
    <div className='productList'>
          {LGList}
    </div>
    
    <Footer/>
  </div>

  {modal &&(
    <div className='modal'>
            <div className='overlay'></div>
              <div className='modal-content'>

                {/*View Product Details*/ }
                {viewProduct.map((item)=>(
              <div className='productDetails' key={item.id}>
                 <img className='product-img' src={item.imgUrl}/>
                 <div className='productDescription'>
                 <h2 className='product-name'>{item.name}</h2>
                 <div className='itemPrice'>
                 <p className='price'>{Rand.format(item.price)}</p>
                 {(item.wasPrice) && <p className='wasPrice'>Was {Rand.format(item.wasPrice)}</p>}
                 <div>
                 <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
                 {cartItems.length >0 &&
                <Link to="/cart"
                className="btn" onClick={() =>handleAddItem(item)}><TiShoppingCart size='1rem'/> Go to cart 
                </Link>}
               </div>
               <Link to="" className='add-to-wish' onClick={() =>{AddWishListItem(item); toggleShown()}} key={item.id}>{isShown ? <BsFillHeartFill color="red" size='1.5rem'/> : <BsHeart color="gray" size='1.5rem'/>}</Link> 

               {/* <button className='btn' onClick={() =>AddWishListItem(item)}>Add to Wish</button> */}
             </div>
             <h3>key features</h3>
          <ul>
            {(item.keyFeatures.RAM) && <li>{item.keyFeatures.RAM}</li>}
            {(item.keyFeatures.drive) && <li>{item.keyFeatures.drive}</li>}
             {(item.keyFeatures.processor) && <li>{item.keyFeatures.processor}</li>}
             {(item.keyFeatures.screenSize) && <li>{item.keyFeatures.screenSize}</li>}
             {(item.keyFeatures.OS) && <li>{item.keyFeatures.OS}</li>}
             {(item.keyFeatures.warranty) && <li>{item.keyFeatures.warranty}</li>}
          </ul>

          <div className='icons'>
          <p><GiReturnArrow size='1.5rem'/> Returnable</p>
          <p><BsArrowRepeat size='1.5rem'/> Store exchange</p>
          <p><BsStar size='1.5rem'/>{item.keyFeatures.warranty[0]} Year Warranty</p>
          </div>

          <div className='delivery'>
            <p><BsTruck size='1.5rem'/> Get this product delivered to your doorstep within  5 days</p>
            <br/>
            <p><SlHome size='1.5rem'/> Store pick-up - <a href="#">Check availabilility</a></p>
          </div>
          </div>
        </div>
              ))} 
            <button className='close-modal' onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}
    </>
  )
}

export default Products
