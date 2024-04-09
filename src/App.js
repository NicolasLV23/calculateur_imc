import React, { useState } from "react";
import ChampSaisie from './components/ChampSaisie';
import CalculerImc from './components/CalculerImc';
import AfficherResultat from './components/AfficherResultat';

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
    <div>
      <h1>Calculateur de IMC</h1>
      <ChampSaisie label="Poids (kg)" value={poids} onChange={setPoids} />
      <ChampSaisie label="Taille (cm)" value={taille} onChange={setTaille} />
      <CalculerImc onClick={calculerIMC} />
      {imc > 0 && <AfficherResultat imc={imc} />}
    </div>
  );
};

export default App;
