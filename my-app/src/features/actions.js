export const MAKE_MOVE = "MAKE_MOVE";
export const CHANGE_PLAYER = "CHANGE_PLAYER";

const setMoveValue = (index, value) => {
    return {
      type: MAKE_MOVE,
      index: index,
      value: value
    };
  };

  export const setMove = (index) => {
    return (dispatch, getState) => {
      const state = getState();
      if (state.board[index] !== "") // square is taken
        return;
  
      const playerMarker = state.players.activePlayer === 0 ? "O" : "X";
  
      dispatch(setMoveValue(index, playerMarker));
      dispatch(changePlayer());
    };
  };

  export const changePlayer = () => {
    return {
      type: CHANGE_PLAYER
    };
  };
  

