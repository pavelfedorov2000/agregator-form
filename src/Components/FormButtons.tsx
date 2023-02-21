import { FormButton } from "../enums/FormButton";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Button from "./Button";

const FormButtons = () => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);

    return (
        <div className="form-buttons">
            {currentStep !== 1 && <Button text={FormButton.Back} />}
            <Button text={FormButton.Next} />
        </div>
    );
};

export default FormButtons;