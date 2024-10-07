import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../restaurants-page.jsx/restaurants-page';

export const App = ({ title }) => {
    return (
        <>
            <Layout>
                <RestaurantsPage title='Restaurants app' />
            </Layout>
        </>
    );
};
