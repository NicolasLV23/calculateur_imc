import React from "react";


interface ChampSaisieProps {
    label: string;
    value: number;
    onChange: (valeur: number) => void;
}

const ChampSaisie: React.FC<ChampSaisieProps> = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="number" value={value} onChange={(e) => onChange(parseFloat(e.target.value))}/>
        </div>
    );
};

export default ChampSaisie;