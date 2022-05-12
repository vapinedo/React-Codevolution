import React, { Component } from "react";
import MemoComponent from "./MemoComponent";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      name: "Valp",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Valp'
      });
    }, 2000);
  }

  render() {
    console.log('Parent Comp render')
    return <div>
        Parent Component
        <MemoComponent name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
    </div>;
  }
}

export default ParentComp;
