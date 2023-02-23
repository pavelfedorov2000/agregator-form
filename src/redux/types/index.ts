import { BaseInput, CheckboxInput, Input } from "../../interfaces/Input";
import { Step } from "../../interfaces/Step";
import { ActionType } from "../actionsList";

export interface FormState {
    data: Step[];
    currentStep: number;
}

interface SetInputValueAction {
    type: ActionType.SetInputValue;
    payload: Input;
}

interface SetCheckboxValueAction {
    type: ActionType.SetCheckboxValue;
    payload: CheckboxInput;
}

interface SetRadioValueAction {
    type: ActionType.SetRadioValue;
    payload: { step: number, name: string, value: string };
}

interface PrevStepAction {
    type: ActionType.PrevStep;
}

interface NextStepAction {
    type: ActionType.NextStep;
}

interface GoToStepAction {
    type: ActionType.GoToStep;
    payload: number;
}

export type FormAction = SetInputValueAction | SetRadioValueAction | SetCheckboxValueAction | PrevStepAction | NextStepAction | GoToStepAction;