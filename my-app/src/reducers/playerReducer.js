 const currentPlayer = (state = 'X', action) => {
    switch (action.type) {
      case 'SWITCH_PLAYER':
        return state === 'X' ? 'O' : 'X'
      default:
        return state
    }
  }

  export default currentPlayer
  