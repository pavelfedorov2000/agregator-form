import { PERCENTS } from "../constants/percents";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    className: string;
}

const ProgressPercent = ({ className }: Props) => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);

    return (
        <span className={className}>{PERCENTS[currentStep - 1]}%</span>
    );
};

export default ProgressPercent;