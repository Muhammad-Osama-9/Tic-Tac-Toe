import { useState } from "react";


export default function Player({ initialName, symbol }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [newName, setNewName] = useState(false);

    let buttonName = "Edit";


    function handleEditingClick() {
        setNewName(newName => !newName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    let playersection = <span className="player-name" > {playerName}</span>;
    if (newName) {
        playersection = <input type="text" placeholder="Name ... " value={playerName} required onChange={handleChange} />;
        buttonName = "Save";
    }
    return (

        <span className="player">
            {playersection}
            <button onClick={handleEditingClick}>{buttonName}</button>
            <span className="player-symbol">{symbol}</span>

        </span>


    );
} 