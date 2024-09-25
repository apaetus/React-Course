import { restaurants } from "../../materials/mock";

export const Restaurants = ({ name, menu, reviews }) => {
    if (!name || !menu) {
        return null;
    }

    return (
        <main>
            <h2>{name}</h2>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (<li>{dish.name}</li>))}
            </ul>
            {!reviews || (
                <>
                    <h3>Reviews</h3>
                    <ul>
                        {reviews.map((review) => ( <li>{review.text}</li> ))}
                    </ul>
                </>
            )}
        </main>
    );
};