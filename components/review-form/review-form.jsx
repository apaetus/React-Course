import { Counter } from '../counter/counter';
import { useForm } from './use-form';

export const ReviewForm = () => {
    const {
        name,
        text,
        rating,
        setName,
        setText,
        plusRating,
        minusRating,
        clearButton,
    } = useForm();

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <div>
                <span>name</span>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>

            <div>
                <span>text</span>
                <input
                    type='text'
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
            </div>

            <Counter
                value={rating}
                plus={plusRating}
                minus={minusRating}
            />

            <button type='button' onClick={clearButton}>
                Clear
            </button>
        </form>
    );
};
