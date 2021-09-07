import React from "react";
import styled from 'styled-components'
import { connect } from 'react-redux'
import Wrapper from "./wrapper"
import Movie from "./movie";
import api from "../api"
import { ADD_MOVIES } from "../actions";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends React.Component {
  constructor(props){
    console.log(props)
    super(props)
    this.state = {
      page: 1,
    }
    this.handleIntersection = this.handleIntersection.bind(this)
  }

  handleIntersection(entries){
    if(entries[0].isIntersecting) {
      this.props.getPage(this.state.page)
      this.setState({
        page: this.state.page + 1
      })
    }
  }
  componentDidMount(){
    //this.getPage(this.state.page)
   /*  store.subscribe( () => {
      this.setState()
    })*/
   const observer =  new IntersectionObserver(this.handleIntersection)
    observer.observe(window.intersector)
  }
  render(){
    return(
      <Wrapper>
       <MovieListStyled >
         {this.props.movieListId.map(ids => {
          const { poster_path, title, id, vote_average } = this.props.movieList.get(ids)
          return (
            <Movie
              id={id}
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
            />
          )
          })}
        </MovieListStyled>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    movieListId: state.list[state.filter],
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPage: async (page) => {
      const { results } = await api.moviePage(page)
      dispatch({
        type: ADD_MOVIES,
        payload: results,
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)