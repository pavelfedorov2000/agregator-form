import { useTypedSelector } from "../hooks/useTypedSelector";
import ResultItem from "./ResultItem";
import StepHeader from "./StepHeader";

const Result = () => {
    const { data } = useTypedSelector((state) => state.formReducer);

    return (
        <div className="step active">
            <StepHeader />
            <div className="result">
                {data.map((step, index) => (
                    <ResultItem key={index} index={index} {...step} />
                ))}
            </div>
        </div>
    );
};

export default Result;