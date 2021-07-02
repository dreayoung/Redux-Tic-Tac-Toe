import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer';
import currentPlayer from '../reducers/playerReducer';

const game = combineReducers({boardReducer, currentPlayer})
const store = createStore(game);
  
export default store;