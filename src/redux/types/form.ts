import { CheckboxInput, Input } from "../../interfaces/Input";
import { Step } from "../../interfaces/Step";
import { ActionType } from "../actionsList";

export interface FormState {
    data: Step[];
    currentStep: number;
    success: boolean;
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
    payload: CheckboxInput;
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

interface SetSuccessAction {
    type: ActionType.SetSuccess;
}

interface SubmitFormAction {
    type: ActionType.SubmitForm;
}

export type FormAction = SetInputValueAction | SetRadioValueAction | SetCheckboxValueAction | PrevStepAction | NextStepAction | GoToStepAction | SetSuccessAction | SubmitFormAction;