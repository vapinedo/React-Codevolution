import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Valp</div> 

    // let message = this.state.isLoggedIn 
    //     ? <div>Welcome Valp</div> 
    //     : <div>Welcome Guest</div>

    // return (
    //     <div>{message}</div>
    // )

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Valp</div>;
    // }

    // return <div>Welcome Guest</div>;
  }
}

export default UserGreeting;
