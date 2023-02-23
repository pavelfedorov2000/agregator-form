import classNames from "classnames";
import { FieldsGroup as FieldsGroupType } from "../interfaces/FieldsGroup";
import Field from "./Field";
import Legend from "./Legend";

const FieldsGroup = ({ legend, name, fields, fieldsClass, columnsCount }: FieldsGroupType) => {
    return (
        <fieldset className={classNames('step__item step-item', name && name)}>
            {legend && <Legend className="field-title step-item__title" {...legend} />}

            <div className={classNames('step-item__fields grid', fieldsClass && fieldsClass, name && `${name}__fields`, columnsCount && `col-${columnsCount}`, fields[0].cols && 'col-2')}>
                {fields.map((field) => (
                    <Field {...field} fieldsName={name} name={field.name ?? name} />
                ))}
            </div>
        </fieldset>
    );
};

export default FieldsGroup;