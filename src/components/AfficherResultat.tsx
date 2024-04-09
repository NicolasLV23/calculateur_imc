import React from "react";

interface AfficherResultatProps {
    imc: number;
}

const AfficherResultat: React.FC<AfficherResultatProps> = ({ imc }) => {
    let etat = "";
    
    if (imc < 18.5) {
        etat = "maigre";
    } else if (imc >= 18.5 && imc < 25) {
        etat = "normal";
    } else if (imc >= 25 && imc < 30) {
        etat = "en surpoids";
    } else {
        etat = "obèse";
    }

    return (
        <div>
            <p>Votre IMC est de: {imc.toFixed(2)}</p>
            <p>Vous êtes {etat}.</p>
        </div>
    );
};

export default AfficherResultat;