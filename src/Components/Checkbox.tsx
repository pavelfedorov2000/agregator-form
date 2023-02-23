import classNames from "classnames";
import { Checkbox as CheckboxType } from "../interfaces/Checkbox";
import checkIcon from '../assets/images/icons/check.svg';
import blackCheckIcon from '../assets/images/icons/black-check.svg';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Checkbox = ({ name, text, small, bg, style, light }: CheckboxType) => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const { setCheckboxValue } = useActions();

    const stepValues = data[currentStep - 1].items?.find((step) => step.name === name)?.values;

    const isChecked = stepValues && stepValues[0].map((item: any) => item.text ?? item.bg).includes(text ?? bg);

    return (
        <label className={classNames('checkbox', style && `checkbox--style_${style}`)}>
            <input onChange={() => setCheckboxValue({ step: currentStep, name, value: text })} className="checkbox__input" name={name} type="checkbox" checked={isChecked} />
            <span className="checkbox__style" style={{ backgroundImage: `url(${light ? blackCheckIcon : checkIcon})`, backgroundColor: bg ?? 'transparent', border: bg === '#000' || !bg ? '0.1rem solid #fff' : 'none' }}></span>
            {text && <span className="checkbox__text">{text}</span>}
            {small && <small>{small}</small>}
        </label>
    );
};

export default Checkbox;