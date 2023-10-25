import './App.css'
import {useSelector} from "react-redux"

function App() {
  const products=useSelector((state)=>state.items.products)
  console.log(products)  


  return (
    <main>
      <h1>hola mundo!!</h1>
    </main>
  )
}

export default App
