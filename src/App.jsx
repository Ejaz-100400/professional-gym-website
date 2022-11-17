import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Gymcategories from './Components/Gymcategories'
import ExerciseCateg from './Components/ExerciseCateg'

function App() {

  return (
    <div className="App black-bg-1">
      <Header/>
      <Main />
      <Gymcategories />
      <ExerciseCateg />
    </div>
  )
}

export default App
