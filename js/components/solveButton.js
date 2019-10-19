import React from "react";

export default class SolveButton extends React.Component {
  render () {
    return (
      <button className = "btn btn-primary btn-lg" onClick = {this.props.onClickHandler}>
        Solve Board
      </button>
    )
  }
}