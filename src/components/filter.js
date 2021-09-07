import React from 'react';
import { connect } from 'react-redux'
import Select from "./select.js";
import { SET_FILTER } from "../actions"

class Filter extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return(
      <Select onChange={this.props.handleChange}>
        <option value="all">Todas</option>
        <option value="mostValued">Más Valoradas</option>
        <option value="leastValued">Menos Valoradas</option>
      </Select>
    )
  }
}

function handleChange(event){
  return({
    type: SET_FILTER,
    payload: event.target.value,
  })
}

export default connect(null,{handleChange})(Filter)