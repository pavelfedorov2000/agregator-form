import { useTypedSelector } from "../hooks/useTypedSelector";
import FormButtons from "./FormButtons";
import Result from "./Result";
import Step from "./Step";

const Form = () => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);

    return (
        <form id="form">
            {currentStep === data.length + 1 ?
                <Result />
                :
                <>
                    {data.map((step, index) => (
                        <Step key={index} index={index} {...step} />
                    ))}
                </>
            }
            <FormButtons />
        </form>
    );
};

export default Form;