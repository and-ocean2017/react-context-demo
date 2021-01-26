import { Component } from 'react';
import Main from './Main';
import ThemeContext from '../context/ThemeContext';

class App extends Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState( (state) => {
        return {
            theme: state.theme === 'light' ? 'dark' : 'light'
        }
    })    
  }

  render() {
      return (
        <ThemeContext.Provider value={this.state.theme}>
          <div className="p-4 h-100 d-flex flex-column">
            <div className="d-flex mb-4 justify-content-center align-items-center">
              <button
                className="btn btn-sm btn-warning"
                onClick={this.toggleTheme}
              >
                toggle {this.state.theme} theme
              </button>
            </div>
            <Main />
          </div>
        </ThemeContext.Provider>
      );
  }
}

export default App;