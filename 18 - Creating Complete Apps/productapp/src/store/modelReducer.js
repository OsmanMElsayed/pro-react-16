import { STORE, UPDATE, DELETE } from './modelActionTypes';
import { INITIAL_DATA } from './initialData';

export default function(modelData, action) {
    switch(action.type) {
        case STORE:
            return {
                ...modelData,
                [action.dataType]: modelData[action.dataType].concat(action.payload)
            };

        case UPDATE:
            return {
                ...modelData,
                [action.dataType]: modelData[action.dataType].map(m => m.id === action.payload.id ? action.payload : m)
            }

        case DELETE:
            return {
                ...modelData,
                [action.dataType]: modelData[action.dataType].filter(m => m.id !== action.payload)
            }

        default:
            return modelData || INITIAL_DATA.modelData;
    }
}

