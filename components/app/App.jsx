import { Restaurant } from '../restaurant/restaurant';
import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/layout';
import { ReviewForm } from '../review-form/review-form';

export const App = ({ title }) => {
    return (
        <>
            <Layout>
                <h1>{title}</h1>
                {restaurants.map(({ name, menu, reviews }) => (
                    <Restaurant
                        name={name}
                        menu={menu}
                        reviews={reviews}
                    />
                ))}
                <ReviewForm />
            </Layout>
        </>
    );
};
