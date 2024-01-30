import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import PcMain from './screen/pc/Main'
import MoMain from './screen/mo/Main'

function App() {
  const [isPC, setIsPc] = useState(window.innerWidth > 800)

  return (
    <div className="App">
      <Routes>
        <Route path="/*" Component={isPC ? PcMain : MoMain} />
      </Routes>
    </div>
  )
}

export default App
