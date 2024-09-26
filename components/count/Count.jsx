import { useCount } from "./use-count";

export const Count = () => {
    const { value, plus, minus } = useCount();

    return (
        <div>
            <button onClick={plus}>+</button>
            {value}
            <button onClick={minus}>-</button>
        </div>
    );
};