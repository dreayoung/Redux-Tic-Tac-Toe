import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../reducers/boardReducer';
import playerReducer from '../reducers/playerReducer'

export const store = configureStore({
    reducer: {
      board: boardReducer,
      player: playerReducer,
    }
  });
  