// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Forms } from './components/Forms/Forms'
import { Produtos } from './components/Produtos/Produtos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>    
      <Forms/>
      <Produtos/>
    </div>
  )
}

export default App
