import React from "react"
import Wrapper from "./wrapper"

class Actions extends React.Component {
  render(){
    const { children } = this.props
    return(
      <Wrapper>
        <div className="actions">
          {children}
        </div>
      </Wrapper>
    )


   /*  Wrapper({
      children: createElement('div', {
        class: 'actions',
        children,
      })
    }) */
  }
}
export default Actions