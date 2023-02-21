import { useState } from "react";
import { Checkbox as CheckboxType } from "../interfaces/Checkbox";

/* interface Props extends CheckboxType {

} */

const Checkbox = ({ text }: CheckboxType) => {
    const [checked, setChecked] = useState(false);

    return (
        <label className="checkbox">
            <input className="checkbox__input" type="checkbox" />
            <span className="checkbox__style"></span>
            <span className="checkbox__text">
                {text}
            </span>
        </label>
    );
};

export default Checkbox;