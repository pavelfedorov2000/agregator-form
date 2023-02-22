import classNames from "classnames";
import { useState } from "react";
import { Checkbox as CheckboxType } from "../interfaces/Checkbox";
import checkIcon from '../assets/images/icons/check.svg';
import blackCheckIcon from '../assets/images/icons/black-check.svg';

const Checkbox = ({ text, small, bg, style, light }: CheckboxType) => {
    //const [checked, setChecked] = useState(false);

    return (
        <label className={classNames('checkbox', style && `checkbox--style_${style}`)}>
            <input className="checkbox__input" type="checkbox" />
            <span className="checkbox__style" style={{ backgroundImage: `${bg ? `url(${light ? blackCheckIcon : checkIcon})` : 'none'}`, backgroundColor: bg ?? 'transparent', border: bg === '#000' || !bg ? '0.1rem solid #fff' : 'none' }}></span>
            {text && <span className="checkbox__text">{text}</span>}
            {small && <small>{small}</small>}
        </label>
    );
};

export default Checkbox;