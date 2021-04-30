import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
// state goes in constructor because constructor goes first.
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }
  // This method updates selectedColor with whatever is passed into it as argument

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />) // key and color are props
    // ask about genRow
    // genRow returns a collection of cell components
    // the actual color value stored in the data is passed into Cell as color={val}
    // ask if vals is coming from the array in data.js
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
    // ask about genMatrix
    // values prop was givin in index.js
    // values are mapped to JSX elements
  )

  render() {
    return (
      <div id="app">
        <ColorSelector  setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
      // nested divs
      // when using an arrow(=>) function, you can use parentheses instead of
      // curly braces {}
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}