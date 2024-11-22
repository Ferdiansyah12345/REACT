import { useState } from 'react'
import Header from './components/header'
import Calon from './components/calon'
import './App.css'

function App() {
  const [suaraSatu, setSuaraSatu] = useState(0)
  const [suaraDua, setSuaraDua] = useState(0)
  const [suaraTiga, setSuaraTiga] = useState(0)

  const handleClickSatu = () => setSuaraSatu(suaraSatu+1)
  const handleClickDua = () => setSuaraDua(suaraDua+1)
  const handleClickTiga = () => setSuaraTiga(suaraTiga+1)

  return (
    <>
      {/* panggil component header */}
      <Header />
      <Calon nama="Fitri Nandri" perolehansuara={suaraSatu} onClick={handleClickSatu} />
      <Calon nama="RD PS" perolehansuara={suaraDua} onClick={handleClickDua} />
      <Calon nama="Yudha Bahar" perolehansuara={suaraTiga} onClick={handleClickTiga} />
    </>
  )
}

export default App
