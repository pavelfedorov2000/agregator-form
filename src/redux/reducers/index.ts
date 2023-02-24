import { combineReducers } from 'redux';
import formReducer from './formReducer';
import dropdownReducer from './dropdownReducer';

export const rootReducer = combineReducers({
    formReducer,
    dropdownReducer,
});

export type RootState = ReturnType<typeof rootReducer>;