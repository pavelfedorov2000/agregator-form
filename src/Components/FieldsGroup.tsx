import classNames from "classnames";
import { FieldsGroup as FieldsGroupType } from "../interfaces/FieldsGroup";
import Field from "./Field";
import Legend from "./Legend";

const FieldsGroup = ({ legend, name, columnsCount, fields }: FieldsGroupType) => {
    return (
        <fieldset className="step__item step-item">
            {legend && <Legend className="field-title step-item__title" title={legend} />}

            <div className={classNames('step-item__fields grid', name && `${name}__fields`, columnsCount && `col-${columnsCount}`)}>
                {fields.map((field) => (
                    <Field {...field} />
                ))}
            </div>
        </fieldset>
    );
};

export default FieldsGroup;