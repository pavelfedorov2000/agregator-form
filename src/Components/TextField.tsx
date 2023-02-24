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

    const notThisSteps = data.filter((_, index) => index !== currentStep - 1);
    const similarStep = notThisSteps.find((step) => step.items?.find((item) => item.fields.find((field) => field.name === name)));
    const similarStepItem = similarStep?.items?.find((item) => item.fields.find((field) => field.name === name));
    const similarField = similarStepItem?.fields.find((field) => field.name === name);
    const similarFieldValue = similarField?.value;
    

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            step: currentStep,
            fieldsName: fieldsName,
            name: event.target.name,
            value: event.target.value
        });
    }

    const handleTextfieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue({
            step: currentStep,
            fieldsName: fieldsName,
            name: event.target.name,
            value: event.target.value
        });
    }

    return (
        type === FieldType.Textarea ?
            <textarea onInput={handleTextfieldChange} className="input textarea step-item__input" name={name} value={value}></textarea>
            :
            <>
                {title || descr ?
                    <label className="input-wrap">
                        {title && <span>{title}</span>}
                        <input onInput={handleInputChange} className={classNames('input', className && `${className}__input`, size && `input--size_${size}`)} name={name} value={currentStep !== 1 && similarFieldValue ? similarFieldValue : value} />
                        {descr && <span className="step-item__input-descr">{descr}</span>}
                    </label>
                    :
                    <input onInput={handleInputChange} className="input step-item__input" name={name} value={currentStep !== 1 && similarFieldValue ? similarFieldValue : value} />
                }
            </>
    );
};

export default TextField;