import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App
