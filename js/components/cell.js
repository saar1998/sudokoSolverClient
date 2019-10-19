import React from "react"

export default class Cell extends React.Component {
  constructor () {
    super();
    this.state = {isCellDarkend: false, value: ""};
  }

  onInputHandler (e) {
    let value = e.target.value;
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    this.props.onCellChange(value);
    if (value.length == 0) {
      this.setState({isCellDarkend: false, value: ""});
      return;
    }
    this.setState({isCellDarkend: true, value: value});
  }

  updateContent (content) {
    if (content == 0) {
      this.setState({isCellDarkend: false, value: ""});
      return;
    }
    this.setState(Object.assign(this.state, {value: content}));
  }

  render () {
    return (
      <td className = {this.state.isCellDarkend ? "darkend-cell" : ""}><input onInput = {this.onInputHandler.bind(this)} value = {this.state.value} className = {this.state.isCellDarkend ? "darkend-cell" : ""} type="text"></input></td>
    )
  }
}