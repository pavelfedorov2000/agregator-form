import classNames from "classnames";
import { useTypedSelector } from "../hooks/useTypedSelector";
import FieldsGroup from "./FieldsGroup";
import StepHeader from "./StepHeader";

interface Props {
    index: number;
}

const Step = ({ index }: Props) => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const stepData = data[currentStep - 1];

    return (
        <fieldset className={classNames('step', {
            'active': index === currentStep - 1
        })}>
            <StepHeader />
            <div className="step__content">
                {stepData.items?.map((item, index) => (
                    <FieldsGroup key={item.name ? item.name.toString() : index} {...item} />
                ))}
            </div>
        </fieldset>
    );
};

export default Step;