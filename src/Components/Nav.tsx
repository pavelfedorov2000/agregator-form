import classNames from 'classnames';
import dropArrow from '../assets/images/icons/drop-arrow.svg';
import { PERCENTS } from '../constants/percents';
import { useTypedSelector } from '../hooks/useTypedSelector';

const steps = ['Basic info', 'Time and Cost', 'Electronics', 'Unit appearance', 'Operating conditions', 'Software', 'Summary'];

const Nav = () => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);

    return (
        <nav className="nav">
            <div className="nav__inner">
                <div className="nav__menu">
                    <ul className="nav__list">
                        {steps.map((title, index) => (
                            <li key={index} className={classNames('nav__item', {
                                'nav__item--completed': index < currentStep,
                                'nav__item--current': index === currentStep
                            })}>
                                <button className="nav__btn" type="button">{title}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__status">
                        Completed: 
                        <span className="nav__status-percent">{PERCENTS[currentStep]}%</span>
                    </div>
                </div>
                <button className="nav__arrow-btn" type="button">
                    <img src={dropArrow} alt="стрелка вверх" />
                </button>
            </div>
        </nav>
    );
};

export default Nav;