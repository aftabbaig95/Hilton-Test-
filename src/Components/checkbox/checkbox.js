import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      disabled: true, 
      
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDisable = this.handleDisable.bind(this)

  }
  
  handleCheck() {
    // if(this.props.number >2 && this.state.checked === true){
    this.setState({ checked: !this.state.checked });
    // document.getElementById(this.props.number);
    if(this.props.number === "3" ){
      
    document.getElementById("2").checked =  !document.getElementById("2").checked
    console.log(document.getElementById("2").checked);
  }
    //  document.getElementById("two").disabled =  !document.getElementById("two").disabled
    //  document.getElementById("two-child").disabled=  !document.getElementById("two-child").disabled
    else if(this.props.number === "4" ){
      document.getElementById("2").checked =  !document.getElementById("2").checked
      // document.getElementById("two").disabled =  !document.getElementById("two").disabled
      // document.getElementById("two-child").disabled=  !document.getElementById("two-child").disabled

      document.getElementById("3").checked =  !document.getElementById("3").checked
      // document.getElementById("three").disabled =  !document.getElementById("three").disabled
      // document.getElementById("three-child").disabled=  !document.getElementById("three-child").disabled
     }
    
  }
  handleDisable(){ 
    console.log(document.getElementById(this.props.number).checked, this.props.number);

    if(document.getElementById("2").checked === true){
      document.getElementById(this.props.adult).disabled = false
        document.getElementById(this.props.child).disabled = false 
    }
    if(document.getElementById("3").checked === true){
      document.getElementById(this.props.adult).disabled = false
        document.getElementById(this.props.child).disabled = false 
    }
    if(document.getElementById("4").checked === true){
      document.getElementById(this.props.adult).disabled = false
        document.getElementById(this.props.child).disabled = false 
    }
    // if(document.getElementById(this.props.number).checked === true){
    //   document.getElementById(this.props.adult).disabled = !true
    //   document.getElementById(this.props.child).disabled = !true    }
    // else if(document.getElementById(this.props.number).checked === false){
      
    //   document.getElementById(this.props.adult).disabled = !false
    //    document.getElementById(this.props.child).disabled = !false

    // }
  }
 
  render() {
    var msg;
    if (this.state.checked) {
      msg = "room checked" + this.props.number;
      console.log(msg);
    } else {
      msg = "room unchecked" + this.props.number;
      console.log(msg);
    }
    // var x =document.getElementById(this.props.number).checked
    
    return (
      <div>
        <input id={this.props.number} type="checkbox" onClick={this.handleCheck} onChange={this.handleDisable} />
        {`Room ${this.props.number}`} 
        <div className="guests">
              <div className="Guest-Specs">
                Adults <br/>
                (18+) <br/>
                <select id={this.props.adult} name="" onchange="myFunction(event)" disabled={this.state.disabled} >
                  <option disabled selected>
                    1
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="Guest-Specs">
                Children <br/>
                 (0-17) <br/>
                <select id={this.props.child} name="" onchange="myFunction(event)" disabled={this.state.disabled} >
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
