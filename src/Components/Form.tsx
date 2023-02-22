import { useTypedSelector } from "../hooks/useTypedSelector";
import FormButtons from "./FormButtons";
import Step from "./Step";

const Form = () => {
    const { data } = useTypedSelector((state) => state.formReducer);

    return (
        <form id="form">
            {data.map((step, index) => (
                <Step index={index} {...step} />
            ))}
            <FormButtons />
        </form>
    );
};

export default Form;