import React from 'react'
import ReactDOM from 'react-dom'
import store from './app/store'
import './App.css'

const gameStatus = board => {
  const winConditions = [[0, 1, 2],
                         [3, 4, 5],
                         [6, 7, 8],
                         [0, 3, 6],
                         [1, 4, 7],
                         [2, 5, 8],
                         [0, 4, 8],
                         [2, 4, 6]]
  if (board.every(x => x)) return {win: false}
  return winConditions.reduce((win, c) => {
    if (!board[c[0]]) return win
    if (board[c[0]] === board[c[1]] &&
        board[c[0]] === board[c[2]]) {
      return {win: true, winner: board[c[0]]}
    };
    return win
  }, {win: false, winner: null})
}

const Square = ({marker, onclick}) => (
  <div className="square" onClick={() => onclick()}>{marker}</div>
)

const Board = ({board}) => {
  return (
    <div className="board">
      {board.map((x, i) =>
        <Square
          marker={x}
          key={i}
          onclick={() => {
            if (!board[i] && !gameStatus(board).win) {
              store.dispatch({
                type: 'PLACE_MARKER',
                positon: i,
                marker: store.getState().currentPlayer
              })
              store.dispatch({type: 'SWITCH_PLAYER'})
            }
          }
          }
        />
      )}
    </div>
  )
}

const Gameover = ({board}) => {
  if (gameStatus(board).win) {
    return (
      <div>
        <h1>GAMEOVER</h1>
        <h2>winner is {gameStatus(board).winner}</h2>
        <RestartButton />
      </div>
    )
  } else if (gameStatus(board).tie) {
    return (
      <div>
        <h1>GAMEOVER</h1>
        <h2>it was a tie</h2>
        <RestartButton />
      </div>
    )
  }
  return <div></div>
}

const RestartButton = props => {
  return (
    <button
      onClick={() =>
        store.dispatch({
          type: 'RESTART_GAME'
        })
      }
    >RESTART GAME</button>
  )
}

const App = props => {
  return (
    <div>
      <h1>tictactoe</h1>
      <Board board={store.getState().boardReducer} />
      <Gameover board={store.getState().boardReducer}/>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

store.subscribe(render)

export default App
