import classNames from "classnames";
import { FieldType } from "../enums/FieldType";
import { Field as IField } from "../interfaces/Field";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import TextField from "./TextField";
import Tooltip from "./Tooltip";

const Field = ({ label, name, fieldsName, required, items, cols, value, type, span, style, descr, title, size, className }: IField) => {
    return (
        <>
            {
                type === FieldType.Checkbox ?
                    <>
                        {
                            items && items.map((item, index) => (
                                <Checkbox key={index} style={style} name={name} {...item} />
                            ))
                        }
                        {
                            cols && cols.map((col, i) => (
                                <div key={i} className="step-item__col">
                                    {col.items?.map((item, j) => (
                                        <Checkbox key={j} style={style} name={name} {...item} />
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
                                    <TextField fieldsName={fieldsName} name={name} value={value} type={type} required={required} />
                                </div>
                                : <TextField fieldsName={fieldsName} name={name} value={value} type={type} required={required} />
                            }
                        </>
                    : type === FieldType.Radio ?
                            <>
                                {
                                    items && items.map((item, index) => (
                                        <RadioButton key={index} index={index} items={items} name={name} style={style} {...item} />
                                    ))
                                }
                                {
                                    cols && cols.map((col, i) => (
                                        <div key={i} className="step-item__col">
                                            {col.items?.map((item, j) => (
                                                <RadioButton key={j} index={j} items={col.items} name={name} style={style} {...item} />
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
                        <TextField className={className} fieldsName={fieldsName} name={name} value={value} type={type} title={title} descr={descr} required={required} size={size} />
                    </div>
            }
        </>
    );
};

export default Field;