const boardReducer = (state = [null, null, null, null, null, null, null, null, null], action) => {
  switch (action.type) {
    case 'PLACE_MARKER':
      return state.map((x, i) =>
        i === action.positon ? action.marker : x)
    case 'RESTART_GAME':
      return state.map(x => null)
    default:
      return state
  }
}

export default boardReducer;