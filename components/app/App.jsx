import { Restaurant } from "../restaurant/Restaurant";
import { restaurants } from "../../materials/mock";
import { Layout } from "../layout/Layout";


export const App = ({ title }) => {
    return (
        <>
            <Layout>
                <h1>{title}</h1>
                {restaurants.map(({ name, menu, reviews }) => (
                <Restaurant name={name} menu={menu} reviews={reviews} />
                ))}
            </Layout>
        </>
    )
};