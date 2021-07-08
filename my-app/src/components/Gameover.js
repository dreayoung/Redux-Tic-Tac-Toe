import RestartButton from './RestartButton'
import gameStatus from '../helpers/gameStatus'

const Gameover = ({board}) => {
    if (gameStatus(board).win) {
      return (
        <div>
          <h1>GAMEOVER</h1>
          <h2>winner is {gameStatus(board).winner}</h2>
          <RestartButton />
        </div>
      )
    }
    return <div></div>
  }

export default Gameover