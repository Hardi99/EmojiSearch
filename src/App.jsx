import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import EmojisList from './components/EmojisList'
import Footer from './components/Footer'

function App() {
  const [search, setSearch] = useState()

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <EmojisList search={search} />
      <Footer />
    </>
  )
}

export default App
