import React, { Component } from "react";
// import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button type="button">Increment Value</button>
          <button type="button">Decrement Value</button>
          <button type="button"> Value</button>

          <button type="button">Increment Value</button>
          <button type="button">Decrement Value</button>
          <button type="button"> Value</button>
        </div>
      </div>
    );
  }
}

export default Counter;
