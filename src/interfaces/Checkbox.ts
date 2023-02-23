import { Tooltip } from "./Tooltip";

export interface Checkbox {
    name?: string;
    style?: string;
    text?: string;
    tooltip?: Tooltip;
    items?: Checkbox[];
    small?: string;
    bg?: string;
    light?: boolean;
    /* dropdown?: {
        value: string;
    } */
}