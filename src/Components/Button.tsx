import classNames from 'classnames';

interface Props {
    onClick: () => void;
    className?: string;
    text: string;
    background?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, className, text, background, type }: Props) => {
    return (
        <button onClick={onClick} className={classNames('btn', className && className, {
            'btn--with_bg': background
        })} type={type ?? 'button'}>
            {text}
        </button>
    );
};

export default Button;