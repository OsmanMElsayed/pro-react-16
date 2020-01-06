import { STORE, UPDATE, DELETE } from './modelActionTypes';
import { INITIAL_DATA } from './initialData';

export default function(storeData, action) {
    switch(action.type) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat(action.payload)
            };

        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].map(m => m.id === action.payload.id ? action.payload : m)
            }

        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].filter(m => m.id !== action.payload)
            }

        default:
            return storeData || INITIAL_DATA;
    }
}

