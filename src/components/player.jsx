import { useState } from "react";


export default function Player({ initialName, symbol, activeSymbol, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [newName, setNewName] = useState(false);
    console.log(` player Symbol ${symbol}`);
    let buttonName = "Edit";


    function handleEditingClick() {
        setNewName(newName => !newName);
        if (newName)
            onChangeName(symbol, playerName);

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
        <li className={activeSymbol === symbol ? 'active' : undefined}>
            <span className="player">
                {playersection}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditingClick}>{buttonName}</button>

            </span>

        </li>
    );
} 