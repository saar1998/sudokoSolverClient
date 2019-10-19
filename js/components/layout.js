import React from "react";

import Table from "./table";
import SolveButton from "./solveButton";
import ClearButton from "./clearButton";
import Config from "../../config"

export default class Layout extends React.Component {
  constructor () {
    super();
    this.tableRef = React.createRef();
  }

  async onSolveClickHandler () {
    const table = this.tableRef.current;
    const solution = await this.requestSolution(table.arr);
    if (!solution) {
      return;
    }
    table.updateBoard(solution);
  }

  onClearClickHandler () {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    this.tableRef.current.updateBoard(arr);
  }

  async requestSolution (board) {
    const fetchParams = {
      mode: "cors",
      method: "POST",
      body : JSON.stringify({board: board})
    };
    let res = await fetch(Config.serverUrl, fetchParams);
      return await res.clone().json()
      .catch(async () => {
        alert(await res.text());
      });
  }
  
  render () {
    return (
      <div>
        <Table ref = {this.tableRef}/>
        <SolveButton onClickHandler = {this.onSolveClickHandler.bind(this)}/>
        <ClearButton onClickHandler = {this.onClearClickHandler.bind(this)}/>
      </div>
    )
  }
}