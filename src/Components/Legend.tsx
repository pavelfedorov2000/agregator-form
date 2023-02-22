import { Tooltip as TooltipType } from "../interfaces/Tooltip";
import Tooltip from "./Tooltip";

interface Props {
    className: string;
    text: string;
    small?: string;
    tooltip?: TooltipType;
}

const Legend = ({ className, text, small, tooltip }: Props) => {
    return (
        <legend className={className}>
            {text}
            {small && <small>{small}</small>}
            {tooltip && <Tooltip {...tooltip} />}
        </legend>
    );
};

export default Legend;