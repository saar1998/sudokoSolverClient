import React from "react";

export default class ClearButton extends React.Component {
  render () {
    return (
      <button className = "btn btn-secondary btn-lg" onClick = {this.props.onClickHandler}>
        Clear Board
      </button>
    )
  }
}