import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      disabled: true,
      room2: null,
      room3: null, 
      room4: null 
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }
  // componentWillUpdate = (nextProps, nextState) => {
  //   localStorage.setItem("disabled", JSON.stringify(nextState.disabled));
  // };

  handleCheck() {
    this.setState({ checked: !this.state.checked });
    if (this.props.number === "3") {
      document.getElementById("2").checked = !document.getElementById("2")
        .checked;
      console.log(document.getElementById("2").checked);
    } else if (this.props.number === "4") {
      document.getElementById("2").checked = !document.getElementById("2")
        .checked;
      document.getElementById("3").checked = !document.getElementById("3")
        .checked;
    }
  }
  handleDisable() {
    console.log(
      document.getElementById(this.props.number).checked,
      this.props.number
    );
      //if checkbox 3 is checked then 2 must be checked as well
    this.setState({ checked: !this.state.checked });
    if (
      this.props.number === "3" &&
      document.getElementById("3").checked === true
    ) {
      document.getElementById("2").checked = true;
    } 
    //if checkbox 4 is checked, then checboxes 2 & 3 must also be checked 
    else if (
      this.props.number === "4" &&
      document.getElementById("4").checked === true
    ) {
      document.getElementById("2").checked = true;
      document.getElementById("3").checked = true;
    }
    //if checkbox 2 is off, then checkbox 3 & 4 must be off 
    if (
      // this.props.number === "3" &&
      document.getElementById("2").checked === false
    ) {
      document.getElementById("3").checked = false;
      document.getElementById("4").checked = false;
    }
    //if checkbox 3 or 2 is off then checkbox 4 must be off 
   if (
      // this.props.number === "3" &&
      document.getElementById("3").checked === false 
      // document.getElementById("2").checked === false
    ) {
      document.getElementById("4").checked = false;
    }



    if (document.getElementById("2").checked === true) {
      document.getElementById("two").disabled = false;
      document.getElementById("two-child").disabled = false;
    } else if (document.getElementById("2").checked === false) {
      document.getElementById("two").disabled = true;
      document.getElementById("two-child").disabled = true;
    }

    if (document.getElementById("3").checked === true) {
      document.getElementById("three").disabled = false;
      document.getElementById("three-child").disabled = false;
    } else if (document.getElementById("3").checked === false) {
      document.getElementById("three").disabled = true;
      document.getElementById("three-child").disabled = true;
    }

    if (document.getElementById("4").checked === true) {
      document.getElementById("four").disabled = false;
      document.getElementById("four-child").disabled = false;
    } else if (document.getElementById("4").checked === false) {
      document.getElementById("four").disabled = true;
      document.getElementById("four-child").disabled = true;
    }
  }
  handleSubmit() {}

  render() {
    var msg;
    if (this.state.checked) {
      msg = "room checked" + this.props.number;
      console.log(msg);
    } else {
      msg = "room unchecked" + this.props.number;
      console.log(msg);
    }

    return (
      <div>
        <input
          id={this.props.number}
          type="checkbox"
          onClick={this.handleCheck}
          onChange={this.handleDisable}
        />
        {`Room ${this.props.number}`}
        <div className="guests">
          <div className="Guest-Specs">
            Adults <br />
            (18+) <br />
            <select
              id={this.props.adult}
              name=""
              onchange="myFunction(event)"
              disabled={this.state.disabled}
            >
              <option disabled selected>
                1
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="Guest-Specs">
            Children <br />
            (0-17) <br />
            <select
              id={this.props.child}
              name=""
              onchange="myFunction(event)"
              disabled={this.state.disabled}
            >
              <option disabled selected>
                0
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
