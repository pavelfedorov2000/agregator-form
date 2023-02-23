/* export interface Input {
    name: string;
    value: string;
    dropdown?: boolean;
} */

export interface BaseInput {
    step: number;
}

export interface Input extends BaseInput {
    name: string;
    value: string;
    fieldsName?: string;
}

export interface CheckboxInput extends BaseInput {
    name?: string;
    value?: string;
}