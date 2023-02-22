import classNames from "classnames";
import { FieldType } from "../enums/FieldType";
import { Field as IField } from "../interfaces/Field";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import TextField from "./TextField";
import Tooltip from "./Tooltip";

const Field = ({ label, name, required, items, cols, value, type, span, style, descr, title, size, className }: IField) => {
    console.log(items);

    return (
        <>
            {
                type === FieldType.Checkbox ?
                    <>
                        {
                            items && items.map((item, index) => (
                                <Checkbox key={index} style={style} {...item} />
                            ))
                        }
                        {
                            cols && cols.map((col, i) => (
                                <div key={i} className="step-item__col">
                                    {col.items?.map((item, j) => (
                                        <Checkbox key={j} style={style} {...item} />
                                    ))}
                                </div>
                            ))
                        }
                    </>
                    : type === FieldType.Textarea ?
                        <>
                            {label ?
                                <div className={classNames(className ?? 'step-item__field', span && `span-${span}`)}>
                                    <label className="field-title step-item__title" htmlFor={name}>{label.text}</label>
                                    <TextField name={name} value={value} type={type} required={required} />
                                </div>
                                : <TextField name={name} value={value} type={type} required={required} />
                            }
                        </>
                    : type === FieldType.Radio ?
                            <>
                                {
                                    items && items.map((item, index) => (
                                        <RadioButton index={index} name={name} style={style} {...item} />
                                    ))
                                }
                                {
                                    cols && cols.map((col, i) => (
                                        <div key={i} className="step-item__col">
                                            {col.items?.map((item, j) => (
                                                <RadioButton index={j} name={name} style={style} {...item} />
                                            ))}
                                        </div>
                                    ))
                                }
                            </>
                    :
                    <div className={classNames(className ?? 'step-item__field', span && `span-${span}`)}>
                        {label &&
                            <div className="step-item__title">
                                <label className="field-title step-item__label" htmlFor={name}>
                                    {label.text}
                                </label>
                                {label.tooltip && <Tooltip {...label.tooltip} />}
                            </div>
                        }
                        <TextField className={className} name={name} value={value} type={type} title={title} descr={descr} required={required} size={size} />
                    </div>
            }
        </>
    );
};

export default Field;