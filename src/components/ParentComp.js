import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends PureComponent {
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
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
    </div>;
  }
}

export default ParentComp;
