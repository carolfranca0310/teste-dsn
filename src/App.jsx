import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Forms } from './components/Forms/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>    
      <Forms/>
    </div>
  )
}

export default App
