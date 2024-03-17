import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
      </header>
      <main>
        <Recipes></Recipes>
      </main>


    </>
  )
}

export default App
