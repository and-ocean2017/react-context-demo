import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';
import ColorContext from '../context/ColorContext';
class Main extends Component {
  mainStyle = (theme) => {
    return {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    };
  };
    
  render() {
      return (
          <ThemeContext.Consumer>
          {
            (theme) => {
                return (
                  <div
                    className="h-100 border rounded border-secondary p-4 d-flex justify-content-center align-items-center"
                    style={this.mainStyle(theme)}
                  >
                    <ColorContext.Consumer>
                      {(color) => {
                        return (
                          <h4 style={{ color: color }}>
                            Current theme is: {theme}
                          </h4>
                        );
                      }}
                    </ColorContext.Consumer>
                  </div>
                );
            }
          }
        </ThemeContext.Consumer>
      );
  }
}

export default Main;