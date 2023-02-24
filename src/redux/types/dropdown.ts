import { ActionType } from "../actionsList";

export interface DropdownState {
    visible: boolean;
}

interface OpenFormNavigationAction {
    type: ActionType.OpenFormNavigation;
}

interface CloseFormNavigationAction {
    type: ActionType.CloseFormNavigation;
}

export type DropdownActionsType = OpenFormNavigationAction | CloseFormNavigationAction;