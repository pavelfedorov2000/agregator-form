import { Field } from "./Field";
import { Tooltip } from "./Tooltip";

export interface FieldsGroup {
    legend?: {
        text: string;
        small?: string;
        tooltip?: Tooltip;
    };
    name?: string;
    columnsCount?: number;
    fields: Field[];
    values?: any[];
    value?: string;
    fieldsClass?: string;
    inResult?: boolean;
}