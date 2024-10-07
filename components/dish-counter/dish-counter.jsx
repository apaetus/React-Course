import { useState } from 'react';
import { Counter } from '../counter/counter';

export const DishCounter = () => {
    const [count, setCount] = useState(0);

    const plusCount = () => {
        if (count >= 5) return;

        setCount((count) => count + 1);
    };

    const minusCount = () => {
        if (count <= 0) return;

        setCount((count) => count - 1);
    };

    return (
        <Counter value={count} plus={plusCount} minus={minusCount} />
    );
};
