
export default function Log({ turns }) {


    return (
       
            <ol id='log'>
                {
                   turns.map((turn, index) => (
                     <li key={index}>
                        {`Player ${turn.player} plays ${turn.square.row} col ${turn.square.col}`}
                     </li>
                 ))
                }
            </ol>
        
    );
}