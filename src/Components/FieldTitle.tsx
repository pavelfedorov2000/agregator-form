interface Props {
    title: string;
}

const FieldTitle = ({ title }: Props) => {
    return (
        <legend className="field-title step-item__title">
            {title}
        </legend>
    );
};

export default FieldTitle;