import { FormButton } from "../enums/FormButton";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Button from "./Button";

const FormButtons = () => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);
    const { goToPrevStep, goToNextStep } = useActions();

    return (
        <div className="form-buttons">
            {currentStep !== 1 && <Button onClick={() => goToPrevStep()} text={FormButton.Back} />}
            <Button onClick={() => goToNextStep()} text={FormButton.Next} background />
        </div>
    );
};

export default FormButtons;