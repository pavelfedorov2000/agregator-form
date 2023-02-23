import classNames from "classnames";
import { FieldType } from "../enums/FieldType";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    className?: string;
    fieldsName?: string;
    name?: string;
    type?: string;
    value?: string;
    required?: boolean;
    title?: string;
    descr?: string;
    size?: string;
}

const TextField = ({ className, fieldsName, name, type, value, required, title, descr, size }: Props) => {
    const { setInputValue } = useActions();
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    //console.log(data[currentStep - 1].items);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            step: currentStep,
            fieldsName: fieldsName,
            name: event.target.name,
            value: event.target.value
        });
    }

    return (
        type === FieldType.Textarea ?
            <textarea className="input textarea step-item__input" name={name} value={value}></textarea>
            :
            <>
                {title || descr ?
                    <label className="input-wrap">
                        {title && <span>{title}</span>}
                        <input onInput={handleChange} className={classNames('input', className && `${className}__input`, size && `input--size_${size}`)} name={name} value={value} />
                        {descr && <span className="step-item__input-descr">{descr}</span>}
                    </label>
                    :
                    <input onInput={handleChange} className="input step-item__input" name={name} value={value} />
                }
            </>
    );
};

export default TextField;