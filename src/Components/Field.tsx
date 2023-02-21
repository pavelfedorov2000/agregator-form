import classNames from "classnames";
import { FieldType } from "../enums/FieldType";
import { Field as IField } from "../interfaces/Field";
import Checkbox from "./Checkbox";
import TextField from "./TextField";
import Tooltip from "./Tooltip";

const Field = ({ label, name, required, items, cols, value, type, span }: IField) => {
    console.log(items);

    return (
        <>
            {
                type === FieldType.Checkbox ?
                    <>
                        {
                            items && items.map((item) => (
                                <Checkbox {...item} />
                            ))
                        }
                        {
                            cols && cols.map((col, i) => (
                                <div key={i} className="step-item__col">
                                    {col.items?.map((item, j) => (
                                        <Checkbox key={j} {...item} />
                                    ))}
                                </div>
                            ))
                        }
                    </>
                    : type === FieldType.Textarea ?
                        <>
                            {label ?
                                <div className={classNames('step-item__field', span && `span-${span}`)}>
                                    <label className="field-title step-item__title" htmlFor={name}>{label.text}</label>
                                    <TextField name={name} value={value} type={type} required={required} />
                                </div>
                                : <TextField name={name} value={value} type={type} required={required} />
                            }
                        </>
                    :   
                    <div className={classNames('step-item__field', span && `span-${span}`)}>
                        <div className="step-item__title">
                            <label className="field-title step-item__label" htmlFor={name}>
                                {label?.text}
                            </label>
                            {label?.tooltip && <Tooltip {...label.tooltip} />}
                        </div>
                        <TextField name={name} value={value} type={type} required={required} />
                    </div>
            }
        </>
    );
};

export default Field;