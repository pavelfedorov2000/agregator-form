import { useTypedSelector } from "../hooks/useTypedSelector";
import ResultItem from "./ResultItem";

const Result = () => {
    const { data } = useTypedSelector((state) => state.formReducer);

    return (
        <div className="result">
            {data.map((step, index) => (
                <ResultItem index={index} {...step} />
            ))}
        </div>
    );
};

export default Result;