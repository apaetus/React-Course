import { DishCounter } from '../dish-counter/dish-counter';

export const Restaurant = ({ name, menu, reviews }) => {
    if (!name || !menu) {
        return null;
    }

    return (
        <main>
            <h2>{name}</h2>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        {dish.name} <DishCounter />
                    </li>
                ))}
            </ul>
            {!reviews || (
                <>
                    <h3>Reviews</h3>
                    <ul>
                        {reviews.map((review) => (
                            <li>{review.text}</li>
                        ))}
                    </ul>
                </>
            )}
        </main>
    );
};
