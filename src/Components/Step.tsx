import classNames from "classnames";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Step as StepType } from "../interfaces/Step";
import FieldsGroup from "./FieldsGroup";
import Legend from "./Legend";

interface Props extends StepType {
    index: number;
}

const Step = ({ index, title }: Props) => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const stepData = data[currentStep - 1];
    console.log(stepData);

    return (
        <fieldset className={classNames('step', {
            'active': index === currentStep - 1
        })}>
            <div className="step__header">
                <Legend className="step-title" text={title} />
                <div className="step-num">{currentStep}/{data.length}</div>
            </div>
            <div className="step__content">
                {stepData.items.map((item) => (
                    <FieldsGroup {...item} />
                ))}
            </div>
        </fieldset>
    );
};

export default Step;