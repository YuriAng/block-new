import React from "react"
import Form from "./form.js"
import Input from "./input.js"
import Button from "./button.js"
 import { SEARCH_MOVIE, SET_FILTER } from '../../src/actions/index.js'
 import store from "../store"

class Search extends React.Component {

    handleSubmit(event){
      event.preventDefault()
      const formData = new FormData(event.target)
      const query = formData.get('title')
       if(query){
        return store.dispatch({
          type: SEARCH_MOVIE,
          payload: query
        })
      }
      return store.dispatch({
        type: SET_FILTER,
        payload: 'all'
      })
    }
  render() {
    return(
      <Form action="" onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="Escribe tu pelicula" name="title" />
        <Button>Buscar</Button>
      </Form>
    )

   /*  Form({
      onsubmit: this.handleSubmit,
      children: [
        new Input({
          placeholder: 'Escribe tu pelicula',
          name: 'title',
          type: 'text',
        }),
        new Button(null, 'Buscar')
      ]
    }) */
  }
}


export default Search