import React from "react";

interface CalculerImcProps {
    onClick: () => void;
}

const CalculerImc: React.FC<CalculerImcProps> = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Calculer IMC</button>
        </div>
    );
};

export default CalculerImc;
