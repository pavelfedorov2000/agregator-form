import { FormButton } from "../enums/FormButton";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Button from "./Button";

const FormButtons = () => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const { goToPrevStep, goToNextStep, setSuccess } = useActions();


    return (
        <div className="form-buttons">
            {currentStep !== 1 && <Button onClick={() => goToPrevStep()} text={FormButton.Back} />}
            <Button onClick={() => currentStep === data.length + 1 ? setSuccess() : goToNextStep()} text={FormButton.Next} background />
        </div>
    );
};

export default FormButtons;