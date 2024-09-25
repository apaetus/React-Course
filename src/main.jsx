import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock';
import { App } from '../components/app/App';

createRoot(document.getElementById('root')).render(
    <App title='Restaurants app' />
);