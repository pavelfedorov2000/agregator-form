import classNames from "classnames";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Checkbox } from "../interfaces/Checkbox";
import { Input } from "../interfaces/Input";
import { RadioButton as RadioButtonType } from "../interfaces/RadioButton";
import { useState } from 'react';

interface Props extends RadioButtonType {
    index: number;
    items?: Checkbox[] | Input[];
}

const RadioButton = ({ index, name, text, style, items }: Props) => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const { setRadioValue } = useActions();

    const stepData = data[currentStep - 1].items;
    
    const value = stepData?.find((step) => step.name === name)?.value;

    const [checked, setChecked] = useState(items?.map((item: any) => item.text).findIndex((item) => item === value));

    const handleChange = () => {
        setRadioValue({
            step: currentStep,
            name,
            value: text
        })
        setChecked(index);
    }


    return (
        <label className={classNames('radiobutton', style && `radiobutton--style_${style}`, {
            'step-item__line-radio': style === 'range'
        })}>
            <input onChange={handleChange} className="radiobutton__input" type="radio" name={name} checked={checked === index ? true : false} />
            <span className="radiobutton__style"></span>
            <span className="radiobutton__text">{text}</span>
        </label>
    );
};

export default RadioButton;