import { FieldType } from "../enums/FieldType";
import { Label } from "../interfaces/Label";

interface Props {
    name?: string;
    type?: string;
    value?: string;
    required?: boolean;
}

const TextField = ({ name, type, value, required }: Props) => {
    return (
        type === FieldType.Textarea ?
            <textarea className="input textarea step-item__input" name={name} value={value}></textarea>
            :
            <input className="input step-item__input" name={name} value={value} required={required} />
    );
};

export default TextField;