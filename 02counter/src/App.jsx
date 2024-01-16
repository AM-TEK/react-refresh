import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(9);

  // let counter = 9

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <h1>React state {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>
        Add value</button> {" "}
      <button onClick={removeValue}>
        Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
