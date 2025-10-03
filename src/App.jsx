import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingData from './components/PricingData/PricingData'
import ResultChart from './components/ResultChart/ResultChart';

const pricingPromise=fetch('pricingData.json').then(res=>res.json());

function App() {
 const [open,setOpen]=useState(false);
  return (
    <>
       <header>
             <NavBar open={open} setOpen={setOpen}></NavBar>
       </header>
       <main>
         
         <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
         <PricingData open={open} pricingPromise={pricingPromise}></PricingData>
         </Suspense>
       </main>
       <ResultChart></ResultChart>
      
       
    </>
  )
}

export default App
