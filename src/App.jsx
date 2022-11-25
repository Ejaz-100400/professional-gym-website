import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Gymcategories from './Components/Gymcategories/Gymcategories'
import ExerciseCateg from './Components/Excersiecsategories/ExerciseCateg'
import ProductsCateg from './Components/ProductsCategories/ProductsCateg'
import NewReview from './Components/ProductsCategories/ProductsDescBarPanel/Reviews/NewReview'
import PricingPlans from './Components/Pricing Plans/PricingPlans'
import Footer from './Components/Footer/Footer'
function App() {
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
      <Main />
      <div className='bg-main-scroll scroll-anim'>
      <Gymcategories />
      <ExerciseCateg />
      <ProductsCateg/>
      <NewReview/>
      <PricingPlans />
      <Footer />
      </div>
    </div>
  )
}

export default App
