import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Gymcategories from './Components/Gymcategories/Gymcategories'
import ExerciseCateg from './Components/Excersiecsategories/ExerciseCateg'
import ProductsCateg from './Components/ProductsCategories/ProductsCateg'
import PricingPlans from './Components/Pricing Plans/PricingPlans'
import Footer from './Components/Footer/Footer'
import Cart from './Components/ProductsCategories/ProductsPanel/Cart/Cart';
function App() {
  //cartitemstate
  function moveanim(){
  var cursor=document.querySelector('.cursor');
  document.onmousemove =function(e) {
    cursor.style.left=(e.pageX-25)+'px';
    cursor.style.top=(e.pageY-25)+'px';
    cursor.style.display='block';
  }
  }

  return (
    <div className="App black-bg-1 position-relative" onmousemove={moveanim}>
       <div className="cursor"></div>
      <Header/>
      <div className="position-relative">
      <Cart/>
      <Main />
      <div className='bg-main-scroll scroll-anim'>
      <Gymcategories />
      <ExerciseCateg />
      <ProductsCateg/>
      <PricingPlans />
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default App
