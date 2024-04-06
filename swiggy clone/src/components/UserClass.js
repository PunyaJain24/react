import React, { useState } from "react";

class UserClass extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count Increment</button>
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
                <h3>Address: {this.props.address}</h3>
            </div>
        );
    }
}

export default UserClass;