import React from 'react';

const rollDie = () => (1 + Math.floor(Math.random() * 6));

const DropGame = ({
    toDrop, valuesThatCanDrop, gameIsOver, youWin, drop, roll, start
}) => (
    <div>
        <div><span>To Drop {toDrop}</span></div>
        <ul>
            {
                Object.entries(valuesThatCanDrop).map(([value, dropEnabled]) => (
                    <li key={value}>
                        <button
                            disabled={!dropEnabled}
                            onClick={() => {drop(value)}}
                        >{value}</button>
                    </li>
                ))
            }
        </ul>
        {
            gameIsOver
                ? youWin
                    ? <div>Congratulations! You Win!</div>
                    : <div>You Lose</div>
                : null
        }
        {
            gameIsOver
                ? <button onClick={() => start()}>Restart</button>
                : <button
                    disabled={toDrop !== 0}
                    onClick={() => roll(rollDie() + rollDie())}
                >Roll</button>
        }
    </div>
);

export default DropGame;
