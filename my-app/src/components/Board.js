import Square from './Square'
import gameStatus from '../helpers/gameStatus'
import { useDispatch } from 'react-redux'

const Board = ({ board, player }) => {
  const dispatch = useDispatch()

    return (
      <div className="board">
        {board.map((x, i) =>
          <Square
            marker={x}
            key={i}
            onclick={() => {
              if (!board[i] && !gameStatus(board).win) {
                dispatch({
                  type: 'PLACE_MARKER',
                  positon: i,
                  marker: player
                })
                dispatch({type: 'SWITCH_PLAYER'})
              }
            }
            }
          />
        )}
      </div>
    )
  }
  
export default Board