import { Tooltip } from "./Tooltip";

export interface Checkbox {
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