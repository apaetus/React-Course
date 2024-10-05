export const Counter = ({ value, plus, minus }) => {
    return (
        <div>
            <button type='button' onClick={plus}>
                +
            </button>
            {value}
            <button type='button' onClick={minus}>
                -
            </button>
        </div>
    );
};
