import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [cooking, setCooking] = useState([])

  const handleCooking = (recipe) => {
     const newCooking = [...cooking, recipe]
     setCooking(newCooking)
  }

  const [cooks, setCook] = useState([])

  const handleCook = (cook) => {
    const newCook = [...cooks, cook ]
    setCook(newCook)
  }

  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
      </header>
      <main className='max-w-7xl mx-auto'>
        <div className='text-center mt-24 mb-12 space-y-5'>
          <h1 className='text-4xl	font-semibold	'>
            Our Recipes
          </h1>
          <p className='text-base	font-normal	'>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
        <Recipes handleCooking={handleCooking}></Recipes>
        <Cooking handleCook={handleCook} cooking={cooking}></Cooking>
        </div>
        

      </main>


    </>
  )
}

export default App
