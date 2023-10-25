import './App.css'
import {useSelector} from "react-redux"

function App() {
  const products=useSelector((state)=>state.items.products)
  console.log(products)  


  return(
    <div>
      <h1>hola mundo</h1>
    </div>
  )
}

export default App
