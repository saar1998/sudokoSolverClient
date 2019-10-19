import React from "react";

import Cell from "./cell";

export default class Table extends React.Component {
  constructor () {
    super();
    this.arr = [];
    this.refArray = [];
    for (let i = 0; i < 9; i++) {
      this.arr.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.refArray.push(this.createRefArray());
    }
  }

  createRefArray () {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(React.createRef());
    }
    return arr;
  }

  onCellChange(firstIndex, secondIndex, value) {
    if (value.length == 0) {
      this.arr[firstIndex][secondIndex] = 0;
    }
    else {
      this.arr[firstIndex][secondIndex] = Number(value);
    }
  }

  createRowCells (rowNum) {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(<Cell key = {`${rowNum}${i}`} onCellChange = {this.onCellChange.bind(this, rowNum, i)} ref = {this.refArray[rowNum][i]}/>);
    }
    return arr;
  }

  createRow (rowNum) {
    return (
      <tr key = {rowNum}>
        {this.createRowCells(rowNum)}
      </tr>
    )
  }

  createTableRows () {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(this.createRow(i));
    }
    return arr;
  }

  updateBoard (board) {
    this.arr = board;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.refArray[i][j].current.updateContent(board[i][j]);
      }
    }
  }

  render () {
    return (
      <table>
        <tbody>
          {this.createTableRows()}
        </tbody>
      </table>
    );
  }
}