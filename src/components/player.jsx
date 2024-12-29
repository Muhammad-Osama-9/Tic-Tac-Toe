import { useState } from "react";


export default function Player({ name, symbol }) {
    let buttonName = "Edit";
    function handleEditingClick() {
        setNewName(newName => !newName);
    }
    const [newName, setNewName] = useState(false);
    let playerName = <span className="player-name" > {name}</span> ;
    if (newName) {
        playerName = <input type="text" placeholder="Name ... "  required />;
        buttonName = "Save";
    }
    return (

        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditingClick}>{buttonName}</button>
        </span>


    );
} 