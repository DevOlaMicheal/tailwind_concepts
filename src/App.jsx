import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-whitee">
        <Nav />
        <Home />    
    
    </div>
  )
}

export default App
