import { FieldsGroup } from "./FieldsGroup";

export interface Step {
    title: string;
    subtitle?: string;
    items?: FieldsGroup[];
}