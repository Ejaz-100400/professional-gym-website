import React from 'react';
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Gymcategories from './Components/Gymcategories'
import ExerciseCateg from './Components/ExerciseCateg'
import ProductsCateg from './Components/ProductsCateg'
import NewReview from './Components/NewReview'
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
      <Gymcategories />
      <ExerciseCateg />
      <ProductsCateg/>
        <NewReview/>
    </div>
  )
}

export default App
