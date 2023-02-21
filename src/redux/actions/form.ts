import { Input } from "../../interfaces/Input";
import { ActionType } from "../actionsList"

export const setInputValue = (step: number, name: string, value: string) => ({
    type: ActionType.SetInputValue,
    payload: { step, name, value }
});

export const goToPrevStep = () => ({
    type: ActionType.PrevStep,
});

export const goToNextStep = () => ({
    type: ActionType.NextStep,
});

export const goToStep = (index: number) => ({
    type: ActionType.GoToStep,
    payload: index
});