import reducer from "./reducers"
import movies from "./movies"
import { createStore } from 'redux'
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValueIds,
} from "./normalize"

const initialState = {
  movieList: movieListAsMap(movies),
  filter: 'all',
  list: {
    all: getAllIds(movies),
    mostValue: getMostValuedIds(movies),
    leastValue: getLeastValueIds(movies),
  }
}

const store = createStore(reducer, initialState)

export default store
