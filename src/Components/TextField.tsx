import { spawn } from "child_process";
import classNames from "classnames";
import { FieldType } from "../enums/FieldType";

interface Props {
    className?: string;
    name?: string;
    type?: string;
    value?: string;
    required?: boolean;
    title?: string;
    descr?: string;
    size?: string;
}

const TextField = ({ className, name, type, value, required, title, descr, size }: Props) => {
    return (
        type === FieldType.Textarea ?
            <textarea className="input textarea step-item__input" name={name} value={value}></textarea>
            :
            <>
                {title || descr ?
                    <label className="input-wrap">
                        {title && <span>{title}</span>}
                        <input className={classNames('input', className && `${className}__input`, size && `input--size_${size}`)} name={name} value={value} required={required} />
                        {descr && <span className="step-item__input-descr">{descr}</span>}
                    </label>
                    :
                    <input className="input step-item__input" name={name} value={value} required={required} />
                }
            </>
    );
};

export default TextField;