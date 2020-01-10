import { START_EDITING, END_EDITING } from "./stateActionTypes";

export const startEditing = function(model) {
    return {
        type: START_EDITING,
        payload: model
    };
}

export const endEditing = function() {
    return {
        type: END_EDITING,
    };
}