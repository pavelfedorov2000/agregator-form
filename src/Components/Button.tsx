import { FormButton } from "../interfaces/FormButton";
import classNames from 'classnames';

const Button = ({ text, background }: FormButton) => {
    return (
        <button className={classNames('btn', {
            'btn--with_bg': background
        })} type="button">
            {text}
        </button>
    );
};

export default Button;