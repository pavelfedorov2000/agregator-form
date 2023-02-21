import { Field } from "./Field";

export interface FieldsGroup {
    legend?: string;
    name?: string;
    columnsCount?: number;
    fields: Field[];
}