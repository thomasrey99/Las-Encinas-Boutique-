import Landing from './views/Landing/Landing'
import FormProducts from './views/FormProduct/FormProducts';
import  CarouselR  from './components/Carousel/CarouselR';

import './App.css'
import {useSelector} from "react-redux"

function App() {
  const products=useSelector((state)=>state.items.products)
  console.log(products)  


  return (
    <main>
      <CarouselR/>
      <Landing/>
    </main>
  )
}

export default App
