import { START_EDITING, END_EDITING } from "./stateActionTypes";
import { INITIAL_DATA } from "./initialData";

export default function(stateData, action) {
    switch(action.type) {
        case START_EDITING:
            return {
                ...stateData,
                showEditor: true,
                selectedModel: action.payload || {}
            };

        case END_EDITING:
            return {
                ...stateData,
                showEditor: false,
            }

        default:
            return stateData || INITIAL_DATA.stateData;
    }
}