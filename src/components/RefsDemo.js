import React, { Component, createRef } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.callBackRef = null;
    this.setCallBackRef = (DOMelement) => {
      this.callBackRef = DOMelement;
    };
  }

  componentDidMount() {
    if (this.callBackRef) {
      this.callBackRef.focus()
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallBackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
