import { useActions } from "../hooks/useActions";
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
        <section className="result-item">
            <div className="result-item__header">
                <h3 className="result-item__title">{title}</h3>
                <Button onClick={() => goToStep(index + 1)} text="Edit" />
            </div>
            <ul className="resilt-item__list">
                {items?.map((item) => (
                    <li className="result-item__item">
                        <div className="result-item__item-title">

                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResultItem;