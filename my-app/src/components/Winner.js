import RestartButton from './Restart';
import gameStatus from './Board';

const Winner = ({board}) => {
    if (gameStatus(board).win) {
      return (
        <div>
          <h1>GAMEOVER </h1>
          <h2>winner is {gameStatus(board).winner}</h2>
          <RestartButton />
        </div>
      )
    } else if (gameStatus(board).tie) {
      return (
        <div>
          <h1>GAMEOVER </h1>
          <h2>It's a tie!!</h2>
          <RestartButton />
        </div>
      )
    }
    return;
  }

  export default Winner