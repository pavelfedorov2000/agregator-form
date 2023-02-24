import classNames from 'classnames';
import dropArrow from '../assets/images/icons/drop-arrow.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ProgressPercent from './ProgressPercent';

const steps = ['Basic info', 'Time and Cost', 'Electronics', 'Unit appearance', 'Operating conditions', 'Software', 'Summary'];

const Nav = () => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);
    const { visible } = useTypedSelector((state) => state.dropdownReducer);
    const { goToStep, closeFormNavigation } = useActions();

    const handleGoToStep = (index: number) => {
        document.body.classList.remove('_lock');
        closeFormNavigation();
        goToStep(index + 1);
    }

    const handleCloseNav = () => {
        document.body.classList.remove('_lock');
        closeFormNavigation();
    }

    return (
        <nav className={classNames('nav', {
            'active': visible
        })}>
            <div className="nav__inner">
                <div className="nav__menu">
                    <ul className="nav__list">
                        {steps.map((title, index) => (
                            <li key={index} className={classNames('nav__item', {
                                'nav__item--completed': index < currentStep - 1,
                                'nav__item--current': index === currentStep - 1
                            })}>
                                <button onClick={() => handleGoToStep(index)} className="nav__btn" type="button">{title}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__status">
                        Completed: 
                        <ProgressPercent className="nav__status-percent" />
                    </div>
                </div>
                <button onClick={handleCloseNav} className="nav__arrow-btn" type="button">
                    <img src={dropArrow} alt="стрелка вверх" />
                </button>
            </div>
        </nav>
    );
};

export default Nav;