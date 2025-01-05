import { useState } from "react";


export default function Player({ initialName, symbol, activeSymbol, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [newName, setNewName] = useState(false);
    const [aiIsChecked, setAiIsChecked] = useState(false);
    
    let buttonName = "Edit";


    function handleEditingClick() {
        setNewName(newName => !newName);
        if (newName)
            onChangeName(symbol, playerName);

    }

    function handleAiIsChecked() {

        onChangeName('O', 'AI');
        setPlayerName('AI');
        setAiIsChecked(aiIsChecked => !aiIsChecked);
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

                {(!aiIsChecked) && (<>
                    {(symbol === 'O') && (
                        <div className="ai-checkbox">
                            <input type="checkbox" onChange={handleAiIsChecked} />
                            <span>AI</span>
                        </div>
                    )}
                </>
                )
                }
            </span>


        </li>
    );
} 