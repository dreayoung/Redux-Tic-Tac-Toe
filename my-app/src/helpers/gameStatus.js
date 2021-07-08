const gameStatus = board => {
    const winConditions = [[0, 1, 2],
                           [3, 4, 5],
                           [6, 7, 8],
                           [0, 3, 6],
                           [1, 4, 7],
                           [2, 5, 8],
                           [0, 4, 8],
                           [2, 4, 6]]
    if (board.forEach(x => x)) return {win: false}
    return winConditions.reduce((win, c) => {
      if (!board[c[0]]) return win
      if (board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]) {
        return {win: true, winner: board[c[0]]}
      };
      return win
    }, {win: false, winner: null})
}

export default gameStatus
