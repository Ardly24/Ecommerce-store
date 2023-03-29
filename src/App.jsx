import { useState } from 'react'
import Home from "./routes/Home"
import Products from "./routes/Products"
import ProductDetails from './routes/ProductDetails'
import About from "./routes/About"
import Cart from './routes/Cart'
import WishList from './routes/WishList'
import Register from './routes/Register'
import {Routes, Route} from 'react-router-dom'
import LaptopsData from './components/LaptopsData'
import PhonesData from './components/PhonesData'
import TabletsData from './components/TabletsData'
import PrintersData from './components/PrintersData'
import MonitorsData from './components/MonitorsData'
import Login from './routes/Login'

function App() {
  const {macbooks} = LaptopsData
  const {Hp} = LaptopsData
  const {Lenovo} = LaptopsData
  const {samsung} = PhonesData
  const {iPhones} = PhonesData
  const {Huawei} = PhonesData
  const {Amazon} = TabletsData
  const {GalaxyTab} = TabletsData
  const {iPad} = TabletsData
  const {Canon} = PrintersData
  const {HpPrinter} = PrintersData
  const {Epson} = PrintersData
  const {LG} =MonitorsData
  const {Dell} =MonitorsData
  const {Asus} = MonitorsData


  const [cartItems, setCartItems] =useState([])
  const [wishItems, setWishItems] =useState([])
  const [viewProduct, setViewProduct] =useState([])
  const [modal, setModal]= useState(false)



  //View Product Details
  const showProduct= (product)=>{
    setViewProduct([...viewProduct,{...product}])
    toggleModal()
    }
  
  // Set Modal
  const toggleModal =() =>{
    setModal(!modal, viewProduct.length=0)
  }
  
    /*Add Cart items*/ 
    const handleAddItem =(product) =>{
      const ItemExist = cartItems.find((item) => item.id === product.id);
      if(ItemExist){
        setCartItems(cartItems.map((item) => item.id === product.id ?
        {...ItemExist, quantity: ItemExist.quantity +1} : item)
        );
      }
        else{
          setCartItems([...cartItems,{...product, quantity:1}]);
        }
    }

    /*Remove items from the shopping cart/wishlist */
  const handleRemoveItem =(product) =>{
    const ItemExist = cartItems.find((item) => item.id === product.id);
    if(ItemExist.quantity === 1){
      setCartItems(cartItems.filter((item) =>  item.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((item) => 
        item.id ===product.id ?
        {...ItemExist, quantity: ItemExist.quantity -1} : item))
    }

  }

  /*Add WishList items */
  const AddWishListItem =(product) =>{
    const ItemExist = wishItems.find((item) => item.id === product.id);
    if(ItemExist){
      setWishItems(wishItems.map((item) => item.id === product.id ?
      {...ItemExist, quantity: ItemExist.quantity=1} : item)
      );
    }
      else{
        setWishItems([...wishItems,{...product, quantity:1}]);
      }
  }

  
  return (
  <Routes>
    <Route path='/' element={<Home cartItems={cartItems} wishItems={wishItems}/>}/>

    <Route path='/products' element={<Products macbooks={macbooks} Hp={Hp} Lenovo={Lenovo} samsung={samsung} iPhones={iPhones} 
            Huawei={Huawei} Amazon={Amazon} GalaxyTab={GalaxyTab} iPad={iPad}  showProduct={showProduct} viewProduct={viewProduct} cartItems={cartItems} toggleModal={toggleModal} modal={modal} handleAddItem={handleAddItem} wishItems={wishItems} AddWishListItem={AddWishListItem}
            Canon={Canon} HpPrinter={HpPrinter} Epson={Epson} Dell={Dell} LG={LG} Asus={Asus}/>}
      />

    <Route path='/productDetails' element={<ProductDetails showProduct={showProduct} viewProduct={viewProduct} 
           handleAddItem={handleAddItem} cartItems={cartItems} AddWishListItem={AddWishListItem}/>}
        />

    <Route path="/cart" element={<Cart cartItems={cartItems} handleAddItem={handleAddItem}  handleRemoveItem={handleRemoveItem}/>}/>

    <Route path="/wishList" element={<WishList wishItems={wishItems} AddWishListItem={AddWishListItem} 
           handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem}/>}
      />

    <Route path='/register' element={<Register toggleModal={toggleModal} modal={modal}/>}/>
    <Route path='/login' element={<Login  toggleModal={toggleModal} modal={modal}/>}/>
    <Route path='/about' element={<About  cartItems={cartItems} wishItems={wishItems}/>}/>
  </Routes>
  )
}

export default App
