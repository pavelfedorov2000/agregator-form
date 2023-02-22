import { Checkbox } from "./Checkbox";
import { FieldItems } from "./FieldItems";
import { Label } from "./Label";

export interface Field {
    className?: string;
    label?: Label;
    name?: string;
    required?: boolean;
    value?: string;
    items?: Checkbox[];
    cols?: FieldItems[];
    type?: string;
    span?: number;
    style?: string;
    title?: string;
    descr?: string;
    size?: string;
}