import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <br />
      <div className="footer">
        <a href="https://github.com/mahshid9574/react-week-4">
          Open-source code{" "}
        </a>
        by,
        <a href="https://github.com/mahshid9574"> Mahshid Jamali </a>
        from
        <a href="https://www.shecodes.io"> SheCodes</a>
      </div>
    </div>
  );
}
