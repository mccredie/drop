
export const DROP_VALUES = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
export const canDrop = (roll, up, value) => (
    value > 0 && value < 10 && up[value] && value <= roll
);
export const drop = (up, value) => ({
    ...up,
    [value]: false
});

const any = (seq) => {
    for (let value of seq) {
        if (value) {
            return true;
        }
    }
    return false;
};

export const gameOver = (toDrop, up) => {
    const anyUp = any(Object.values(up));
    if( anyUp && toDrop !== 0 ) {
        return !any(DROP_VALUES.map((value) => canDrop(toDrop, up, value)));
    } else {
        return !anyUp && toDrop === 0;
    }
}

