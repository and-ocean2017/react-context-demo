import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';
class Main extends Component {
  static contextType = ThemeContext;
    
  mainStyle = () => {
    return {
      backgroundColor: this.context === "light" ? "white" : "black",
      color: this.context === "light" ? "black" : "white",
    };
  };
    
  render() {
    return (
      <div
        className="h-100 border rounded border-secondary p-4 d-flex justify-content-center align-items-center"
        style={this.mainStyle()}
      >
        <h4>Current theme is: {this.context}</h4>
      </div>
    );
  }
}

export default Main;