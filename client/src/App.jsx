import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './VIEWS/Home/home';
import Landing from './VIEWS/Landind/landig';
import Detail from './VIEWS/Detail/detail';

const App = () => {

  return (
    <main>
      <Routes> 
        <Route path='/' element={<Landing/>} />
        <Route path='home' element={<Home/>} />
        <Route path='detail/:id' element={<Detail/>} />        
      </Routes>
    </main>
  )
}

export default App
