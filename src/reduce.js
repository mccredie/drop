
const INIT_STATE = {
    up: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    },
    toDrop: 0
};


export default (state=INIT_STATE, action) => {
    switch(action.type) {
        case 'DROP':
            const toDrop = state.toDrop - action.value;
            const up = {...state.up, [action.value]: false}
            return {...state, toDrop, up};
        case 'ROLL':
            return {...state, toDrop: action.value};
        case 'START':
            return INIT_STATE;
        default:
            return state;
    }
}
