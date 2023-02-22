import classNames from 'classnames';
import closeIcon from '../assets/images/icons/close.svg';
import { TooltipList } from '../enums/Tooltip';
import { Tooltip as TooltipType } from '../interfaces/Tooltip';

const Tooltip = ({ text, type, href }: TooltipType) => {
    return (
        <div className="tooltip">
            <button className={classNames('tooltip__btn', {
                'tooltip__btn--attention': type === TooltipList.Attention,
                'tooltip__btn--question': type === TooltipList.Question,
            })} type="button">
                {type === TooltipList.Attention ? '!' : '?'}
            </button>
            <div className="tooltip__info">
                {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                <button className="tooltip__close-btn" type="button">
                    <img src={closeIcon} alt="крестик" />
                </button>
            </div>
        </div>
    );
};

export default Tooltip;