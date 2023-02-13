import { useState } from 'react'
import wordList from './wordList.json'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessedLetters, useGuessedLetteres] = useState<string[]>([])

  return <h1 className="text-3xl font-bold underline">{wordToGuess}</h1>
}

export default App
