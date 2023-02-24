import { StepName } from "../enums/StepName";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Legend from "./Legend";

const StepHeader = () => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const checkStepIndex = data.length + 1;
    const step = data[currentStep - 1];

    return (
        <div className="step__header">
            <div className="step__top">
                <Legend className="step-title" text={currentStep === checkStepIndex ? StepName.Check : step.title} />
                <div className="step-num">{currentStep}/{checkStepIndex}</div>
            </div>
            {currentStep !== checkStepIndex && step.subtitle && <div className="step__subtitle">{step.subtitle}</div>}
        </div>
    );
};

export default StepHeader;