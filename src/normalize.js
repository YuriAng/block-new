export function movieListAsMap(newList, oldList = new Map()){
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie)
    return list
  }, oldList)
}

export function getAllIds(list, oldList = [] ){
  return oldList.concat(list.map(movie => movie.id))
}

export function getMostValuedIds(list, oldList = [] ){
  return list.reduce((list, movie) => {
    if (movie.vote_average >= 7) {
      list.push(movie.id)
    }
    return list
  }, oldList)
}

export function getLeastValueIds(list, oldList =[] ){
  return list.reduce((list, movie) => {
    if (movie.vote_average < 7) {
      list.push(movie.id)
    }
    return list
  }, oldList)
}
/*
export default {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValueIds,
} */
