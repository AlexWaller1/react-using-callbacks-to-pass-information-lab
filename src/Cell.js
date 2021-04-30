import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectorColor
    })
  }
  // you will commonly see React component methods defined with arrow functions.
  // This is because we often want to access the 'this' keyword within the methods
  // themselves
  
  render() {
    return (
      <div onClick={this.handleClick} className="cell" 
      style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}