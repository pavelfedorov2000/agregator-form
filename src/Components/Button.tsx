import { FormButton } from "../interfaces/FormButton";
import classNames from 'classnames';

const Button = ({ onClick, text, background }: FormButton) => {
    return (
        <button onClick={onClick} className={classNames('btn', {
            'btn--with_bg': background
        })} type="button">
            {text}
        </button>
    );
};

export default Button;