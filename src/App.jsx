import { useState, useEffect } from "react"; // <-- Add useEffect import
import nematLogo from "/nemat-logo.png";
import "./App.css";

function App() {
  // redirect to Google sites
  useEffect(() => {
    window.location.href = "https://sites.google.com/view/nemat-ufdpar/";
  }, []);

  return (
    <>
      <div>
        <img src={nematLogo} className="logo" alt="NEMAT Logo" />

        <h1>NEMAT - UFDPar</h1>
        <h2>
          Universidade Federal do Delta do Parnaíba <br />
          Núcleo de Estudos em Matemática
        </h2>
      </div>
      <div className="card">
        <p>
          Made with <span className="heart">❤️</span> by{" "}
          <a href="https://instagram.com/rmelojs" target="_blank">
            @rmelojs
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
