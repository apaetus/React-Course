import { Restaurant } from '../restaurant/restaurant';
import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/layout';
import { ReviewForm } from '../review-form/review-form';
import { RestaurantsPage } from '../restaurants-page.jsx/restaurants-page';

export const App = ({ title }) => {
    return (
        <>
            <Layout>
                <RestaurantsPage title='Restaurants app' />
                <ReviewForm />
            </Layout>
        </>
    );
};
