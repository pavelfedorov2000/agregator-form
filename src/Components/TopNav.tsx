import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProgressPercent from "./ProgressPercent";
import dropArrow from '../assets/images/icons/drop-arrow.svg';
import { StepName } from "../enums/StepName";

const TopNav = () => {
    const { data, currentStep } = useTypedSelector((state) => state.formReducer);
    const { visible } = useTypedSelector((state) => state.dropdownReducer);
    const { openFormNavigation } = useActions();

    const checkStepIndex = data.length + 1;
    const step = data[currentStep - 1];
    

    const handleOpenNav = () => {
        document.body.classList.add('_lock');
        openFormNavigation();
    }

    return (
        <button onClick={handleOpenNav} className="top-nav" type="button" aria-expanded={visible}>
            <span className="top-nav__title">{currentStep === checkStepIndex ? StepName.Check : step.title}</span>
            <span className="top-nav__arrow" style={{ backgroundImage: `url(${dropArrow})`}}></span>
            <ProgressPercent className="top-nav__progress-percent" />
        </button>
    );
};

export default TopNav;