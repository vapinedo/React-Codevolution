import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      console.log(this.props.name)
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
