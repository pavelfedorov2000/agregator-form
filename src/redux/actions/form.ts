import { CheckboxInput, Input } from "../../interfaces/Input";
import { ActionType } from "../actionsList";

export const setInputValue = ({ step, fieldsName, name, value }: Input) => ({
    type: ActionType.SetInputValue,
    payload: { step, fieldsName, name, value }
});

export const setCheckboxValue = ({ step, name, value }: CheckboxInput) => ({
    type: ActionType.SetCheckboxValue,
    payload: { step, name, value }
});

export const setRadioValue = ({ step, name, value }: CheckboxInput) => ({
    type: ActionType.SetRadioValue,
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

export const submitForm = () => ({
    type: ActionType.SubmitForm
});

export const setSuccess = () => ({
    type: ActionType.SetSuccess
});