import { useActions } from "../hooks/useActions";
import { Checkbox } from "../interfaces/Checkbox";
import { FieldsGroup } from "../interfaces/FieldsGroup";
import Button from "./Button";

interface Props {
    index: number;
    title: string;
    items?: FieldsGroup[];
}

const ResultItem = ({ index, title, items }: Props) => {
    const { goToStep } = useActions();

    return (
        <section className="result-item step__item">
            <div className="result-item__header">
                <h3 className="result-item__title">{title}</h3>
                <Button onClick={() => goToStep(index + 1)} className="result-item__edit-btn" text="Edit" />
            </div>
            <ul className="resilt-item__list">
                {items?.map((item, index) => (
                    <li key={index} className="result-item__item">
                        {
                            !item.fields.some((field) => field.label)
                            && (item.value
                            || item.values)
                            && item.fields.some((field) => field.value !== '')
                            &&
                            <div className="result-item__item-title">
                                {item.legend?.text}
                            </div>
                        }
                        
                        <div className="result-item__item-values">
                            {item.value && <div className="result-value">{item.value}</div>}
                            {item.values && item.values[0].length !== 0 && item.values[0].map((value: Checkbox, index: number) => (
                                <div key={value.text ? value.text.toString() : index} className="result-value">
                                    {value.text}
                                </div>
                            ))}
                            {item.values && item.values[0].length !== 0 && item.values[0][0].bg &&
                                <ul className="result-colors grid col-4">
                                    <>
                                        {
                                            item.values[0].map((value: Checkbox) => (
                                                <div key={value.bg?.toString()} className="result-color" style={{ backgroundColor: value.bg ?? 'transparent', border: value.bg === '#000' ? '0.1rem solid #fff' : 'none' }}></div>
                                            ))
                                        }
                                    </>
                                </ul>
                            }
                            {(!item.value && !item.values) && item.fields.filter((field) => field.inResult && field.value !== '').map((field, index) => (
                                <div key={field.name ?? index} className="result-item__item">
                                    <div className="result-item__item-title">
                                        {field.label?.text}
                                    </div>
                                    <div className="result-value">{field.value}</div>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResultItem;