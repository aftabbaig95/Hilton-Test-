import React, { Component } from "react";
import './dropdown.css'

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <select name="" onchange="myFunction(event)">
    <option disabled selected>1</option>
    <option value="1">1</option>
    <option value="2">2</option>
</select>
      </div>
    );
  }
}
