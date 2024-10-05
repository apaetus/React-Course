import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 1,
};

const SET_NAME_ACTION_TYPE = 'setName';
const SET_TEXT_ACTION_TYPE = 'setName';
const PLUS_RATING_ACTION_TYPE = 'plusRating';
const MINUS_RATING_ACTION_TYPE = 'minusRating';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_NAME_ACTION_TYPE:
            return {
                ...DEFAULT_FORM_VALUE,
                name: payload,
            };

        case SET_TEXT_ACTION_TYPE:
            return {
                ...state,
                text: payload,
            };

        case PLUS_RATING_ACTION_TYPE:
            if (state.rating >= 5) {
                return state;
            } else {
                return {
                    ...state,
                    rating: state.rating + 1,
                };
            }

        case MINUS_RATING_ACTION_TYPE:
            if (state.rating <= 1) {
                return state;
            } else {
                return {
                    ...state,
                    rating: state.rating - 1,
                };
            }

        case 'clear':
            return { ...DEFAULT_FORM_VALUE };

        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const { name, text, rating } = form;

    const setName = (value) => {
        dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
    };

    const setText = (value) => {
        dispatch({ type: SET_TEXT_ACTION_TYPE, payload: value });
    };

    const plusRating = (value) => {
        dispatch({ type: PLUS_RATING_ACTION_TYPE, payload: value });
    };

    const minusRating = (value) => {
        dispatch({ type: MINUS_RATING_ACTION_TYPE, payload: value });
    };

    const clearButton = (value) => {
        dispatch({ type: 'clear' });
    };

    return {
        name,
        text,
        rating,
        setName,
        setText,
        plusRating,
        minusRating,
        clearButton,
    };
};
