import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import EmojisList from './components/EmojisList'
import Footer from './components/Footer'
import { emojiList } from "./assets/emojiList"

function App() {
  //-1 Récupérer les 20 premiers du tableau EmojisList

  //-2 Transmettre les données au state data
  const [search, setSearch] = useState([])

  //-3 Créer une fonction qui interroge EmojisList lors du onChange de l'input avec le paramètre event
  const handleEmoji = (event) => {
      setSearch(event.target.value)
  }
  //-4 Transmettre le nouveau tableau au state data

  return (
    <>
      <Search search={search} setSearch={setSearch} handleEmoji={handleEmoji} />
      <EmojisList emojiList={emojiList} search={search} />
      <Footer />
    </>
  )
}

// -1 Créer un nouvel array
// -2 Créer une condition pour ajouter des éléments dans le tableau
// -3 Afficher le tableau avec une limite de 20 résultats

export default App
