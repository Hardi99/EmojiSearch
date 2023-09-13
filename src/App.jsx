import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import EmojisList from './components/EmojisList'
import Footer from './components/Footer'
import { emojiList } from "./assets/emojiList"

function App() {
  // Ce projet n'utilise qu'un seul state search
  const [search, setSearch] = useState([])

  //-3 Créer une fonction qui interroge EmojisList lors du onChange de l'input avec le paramètre event
  const handleEmoji = (event) => {
      setSearch(event.target.value)
  }

  return (
    <>
      <Search search={search} handleEmoji={handleEmoji} />
      <EmojisList emojiList={emojiList} search={search} />
      <Footer />
    </>
  )
}

// -1 Créer un nouvel array
// -2 Créer une condition pour ajouter des éléments dans le tableau
// -3 Afficher le tableau avec une limite de 20 résultats

export default App
