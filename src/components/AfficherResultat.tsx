import React from "react";

interface AfficherResultatProps {
    imc: number;
}

const AfficherResultat: React.FC<AfficherResultatProps> = ({ imc }) => {
    return <div>Votre IMC est de: {imc.toFixed(2)}</div>;
};

export default AfficherResultat;