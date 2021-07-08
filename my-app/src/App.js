import React from 'react'
import './App.css'
import Board from './components/Board'
import Gameover from './components/Gameover'
import { useSelector } from 'react-redux'

const App = () => {
  let player = useSelector((state) => state.playerReducer);
  let board = useSelector((state) => state.boardReducer);

  return (
    <div>
      <h1>tictactoe</h1>
      <h2>Make Your Move Player {player}</h2>
      <Board board={board} player={player} />
      <Gameover board={board}/>
    </div>
  )
}

export default App
