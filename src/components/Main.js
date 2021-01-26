import React, { Component } from 'react';

class Main extends Component {
    mainStyle = () => {
        return {
          backgroundColor: this.props.theme === "light" ? "white" : "black",
          color: this.props.theme === "light" ? "black" : "white",
        };
    }
    render() {
        return (
          <div
            className="h-100 border rounded border-secondary p-4 d-flex justify-content-center align-items-center"
            style={this.mainStyle()}
          >
            <h4>Current theme is: {this.props.theme}</h4>
          </div>
        );
    }
}

export default Main;