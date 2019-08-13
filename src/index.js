import React, { useState } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const elementoInit = (
    <div className="align-items-center bg-white d-flex jumbotron justify-content-center">
      <div className="card">
        <div className="m-3 card-body">
          <h1 className="font-weight-bold">ACERTAR NÚMERO</h1>
          <button className="btn btn-primary" onClick={iniciarJogo}>
            Começar a jogar!
          </button>
        </div>
      </div>
    </div>
  );

  if (estado === "ENTRADA") return elementoInit;

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => setEstado("FIM");
  if (estado === "FIM") {
    return (
      <div className="align-items-center bg-white d-flex jumbotron justify-content-center">
        <div className="card">
          <div className="card-body">
            <p className="text-center text-uppercase">
              Acertei o número {palpite} com {numPalpites} chutes!
            </p>
            <button className="btn btn-primary" onClick={iniciarJogo}>
              Iniciar novamente!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="align-items-center bg-white d-flex jumbotron justify-content-center">
      <div className="card">
        <div className="card-body">
          <p className="text-center text-uppercase">
            O seu número é {palpite}?
          </p>
          <div className="btn-group" role="group">
            <button className="btn btn-dark" onClick={menor}>
              Menor!
            </button>
            <button className="btn btn-dark" onClick={acertou}>
              Acertou!
            </button>
            <button className="btn btn-dark" onClick={maior}>
              Maior!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
