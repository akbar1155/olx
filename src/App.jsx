import { useState } from 'react'
import './App.css'
import Categoris from './configent/categories/categories';
import Header from './configent/header/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Categoris/>

    </>
  )
}

export default App
