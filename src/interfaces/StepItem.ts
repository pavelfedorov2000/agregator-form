import { Field } from "./Field";
import { FieldsGroup } from "./FieldsGroup";

export interface StepItem {
    legend?: string;
    items: FieldsGroup[];
}