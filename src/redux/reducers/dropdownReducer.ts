import { ActionType } from "../actionsList";
import { DropdownActionsType, DropdownState } from "../types/dropdown";

const initialState: DropdownState = {
    visible: false
};

const dropdownReducer = (state = initialState, action: DropdownActionsType): DropdownState => {
    switch (action.type) {
        case ActionType.OpenFormNavigation:
            return {
                ...state,
                visible: true
            };
        case ActionType.CloseFormNavigation:
            return {
                ...state,
                visible: false
            };
        default:
            return state;
    }
}

export default dropdownReducer;