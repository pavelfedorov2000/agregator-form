import { useTypedSelector } from "../hooks/useTypedSelector";
import FormButtons from "./FormButtons";
import Step from "./Step";

const Form = () => {
    const { data } = useTypedSelector((state) => state.formReducer);

    return (
        <form>
            {data.map((step) => (
                <Step {...step} />
            ))}
            <FormButtons />
        </form>
    );
};

export default Form;