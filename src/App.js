import React, { useState } from "react";
import ChampSaisie from './components/ChampSaisie';
import CalculerImc from './components/CalculerImc';
import AfficherResultat from './components/AfficherResultat';
import "./App.css";

const App = () => {
  const [poids, setPoids] = useState(0);
  const [taille, setTaille] = useState(0);
  const [imc, setImc] = useState(0);

  const calculerIMC = () => {
    const tailleEnMetres = taille / 100;
    const valeurIMC = poids / (tailleEnMetres * tailleEnMetres);
    setImc(valeurIMC);
  };

  return (
    <div className="container bg-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-4">Calculateur d'IMC</h1>
      <table className="input-table">
        <tbody>
          <tr>
            <td><ChampSaisie label="Poids (kg)" value={poids} onChange={setPoids} /></td>
            <td><ChampSaisie label="Taille (cm)" value={taille} onChange={setTaille} /></td>
          </tr>
        </tbody>
      </table>
      <CalculerImc onClick={calculerIMC} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" />
      {imc > 0 && <AfficherResultat imc={imc} className="mt-4 text-green-500 font-bold text-2xl" />}
    </div>
  );
};

export default App;
