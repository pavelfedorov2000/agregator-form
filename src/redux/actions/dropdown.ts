import { ActionType } from "../actionsList";

export const openFormNavigation = () => ({
    type: ActionType.OpenFormNavigation
});

export const closeFormNavigation = () => ({
    type: ActionType.CloseFormNavigation
});