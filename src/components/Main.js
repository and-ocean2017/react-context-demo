import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ColorContext from '../context/ColorContext';

function Main() {

  const theme = useContext( ThemeContext );
  const color = useContext( ColorContext );

  const mainStyle = (theme) => {
    return {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    };
  };

  return (
    <div
      className="h-100 border rounded border-secondary p-4 d-flex justify-content-center align-items-center"
      style={mainStyle(theme)}
    >
    <h4 style={{ color: color }}>Current theme is: {theme}</h4>
    </div>
  );
}
export default Main;