import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingData from './components/PricingData/PricingData'

const pricingPromise=fetch('pricingData.json').then(res=>res.json());

function App() {

  return (
    <>
       <header>
             <NavBar></NavBar>
       </header>
       <main>
         
         <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
         <PricingData pricingPromise={pricingPromise}></PricingData>
         </Suspense>
       </main>
      
       
    </>
  )
}

export default App
