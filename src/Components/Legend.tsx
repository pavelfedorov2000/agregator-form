interface Props {
    className: string;
    title: string;
}

const Legend = ({ className, title }: Props) => {
    return (
        <legend className={className}>
            {title}
        </legend>
    );
};

export default Legend;