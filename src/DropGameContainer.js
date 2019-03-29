
import { connect } from 'react-redux';

import DropGame from './DropGame';
import { DROP_VALUES, canDrop, gameOver } from './drop';
import * as mapDispatchToProps from './DropGameActions';


const mapStateToProps = ({ toDrop, up }) => {
    const valuesThatCanDrop = DROP_VALUES.reduce(
        (acc, value) => ({
            ...acc,
            [value]: canDrop(toDrop, up, value)}),
        {}
    );
    const gameIsOver = gameOver(toDrop, up);
    const youWin = gameIsOver && toDrop === 0;
    return { valuesThatCanDrop, toDrop, gameIsOver, youWin };
};


export default connect(mapStateToProps, mapDispatchToProps)(DropGame);
