import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Gymcategories from './Components/Gymcategories/Gymcategories'
import ExerciseCateg from './Components/Excersiecsategories/ExerciseCateg'
import ProductsCateg from './Components/ProductsCategories/ProductsCateg'
import NewReview from './Components/ProductsCategories/ProductsDescBarPanel/Reviews/NewReview'
// const newReview = function disp(){
//   if(document.querySelector('.products--newreview--panel').style.display=='none'){
//     document.querySelector('.products-newreview').style.display=='none'
//   }
//   else{
//     document.querySelector('.products-newreview').style.display=='block'
//   }
// }
function App() {

  return (
    <div className="App black-bg-1">
      <Header/>
      <Main />
      <div className='bg-main-scroll scroll-anim'>
      <Gymcategories />
      <ExerciseCateg />
      <ProductsCateg/>
      <NewReview/>
      </div>
    </div>
  )
}

export default App
