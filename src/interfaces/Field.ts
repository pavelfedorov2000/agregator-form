import { Checkbox } from "./Checkbox";
import { FieldItems } from "./FieldItems";
import { Input } from "./Input";
import { Label } from "./Label";

export interface Field {
    label?: Label;
    name?: string;
    required?: boolean;
    value?: string;
    items?: Checkbox[];
    cols?: FieldItems[];
    type?: string;
    span?: number;
}