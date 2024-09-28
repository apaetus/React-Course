import { useState } from "react";

export const useCount = () => {
    const [value, setValue] = useState({ value: 0 });

    const plus = () => {
        if (value.value >= 5) {
            return;
        };

        setValue((current) => {
            return {
                value: current.value + 1,
            };
        });
    };

    const minus = () => {
         if (value.value <= 0) return;

        setValue((current) => {
            return {
                value: current.value - 1,
            };
        });
    };

    return {
        value: value.value,
        plus,
        minus,
    };
};