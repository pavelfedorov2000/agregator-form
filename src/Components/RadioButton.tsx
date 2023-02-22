import classNames from "classnames";
import { RadioButton as RadioButtonType } from "../interfaces/RadioButton";

interface Props extends RadioButtonType {
    index: number;
}

const RadioButton = ({ index, name, text, style }: Props) => {
    return (
        <label className={classNames('radiobutton', style && `radiobutton--style_${style}`, {
            'step-item__line-radio': style === 'range'
        })}>
            <input className="radiobutton__input" type="radio" name={name} checked={index === 0 ? true : false} />
            <span className="radiobutton__style"></span>
            <span className="radiobutton__text">{text}</span>
        </label>
    );
};

export default RadioButton;