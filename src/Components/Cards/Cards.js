import React, { Component } from "react";
import "./Cards.css";
import Checkbox from "../checkbox/checkbox";

export default class Cards extends Component {
  constructor(){
    super(); 
    this.state={ 
      room: true

    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">

          <div className="rooms">
          Room 1
            <div className="card-title">
            <div className="guests">
              <div className="Guest-Specs">
                Adults <br/>
                (18+) <br/>
                <select name="" onchange="myFunction(event)"  >
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
                <select name="" onchange="myFunction(event)" >
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
          </div>
          <div className="rooms">
            <div className="card-title">
              <Checkbox number="2" adult="two" child="two-child"/>
            </div>
          </div>
          <div className="rooms">
            <div className="card-title">
              <Checkbox number="3" adult="three" child="three-child"/>
            </div>
          </div>
          <div className="rooms">
            <div className="card-title">
              <Checkbox number="4" adult="four" child="four-child"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
