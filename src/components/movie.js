import React from "react"

class Movie extends React.Component {
  render(){
    const { poster_path, title, id, vote_average } = this.props
    return (
      <article className={`movie ${vote_average >= 7 ? 'recommended' : ''}`}>
        <img className="movie-poster" alt="movie-poster" src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} />
        <p className="movie-title">{title}</p>
        <p className="movie-id">{id}</p>
        <span className="movie-rate">{vote_average}</span>
      </article>
    )
    // return createElement('article', {
    // class: `movie ${vote_average >= 7 ? 'recommended': '' }`,
    // children: [
    //     createElement('img', {
    //       class: 'movie-poster',
    //       src:`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`
    //     }),
    //     createElement('p',{
    //       class: 'movie-title',
    //     }, title),
    //     createElement('p', {
    //       class: 'movie-id',
    //     }, id),
    //     createElement('span', {
    //       class: 'movie-rate',
    //     }, vote_average),
    //   ]
    // })
  }
}

export default Movie