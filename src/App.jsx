import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import EmojisList from './components/EmojisList'

function App() {
  const [search, setSearch] = useState()

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <EmojisList search={search} />
    </>
  )
}

export default App
