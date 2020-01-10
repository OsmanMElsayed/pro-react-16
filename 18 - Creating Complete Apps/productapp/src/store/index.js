import { createStore, combineReducers } from 'redux';
import modelReducer from './modelReducer';
import stateReducer from './stateReducer';


const reducers = {
    modelData: modelReducer,
    stateData: stateReducer
};

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer);

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier } from './modelActionCreators';
export { startEditing, endEditing } from './stateActionCreators';