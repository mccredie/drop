
import { createStore } from 'redux';

import reduce from './reduce';

export default () => (
    createStore(reduce)
);
