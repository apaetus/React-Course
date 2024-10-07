import React from 'react';
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar';

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <ScrollProgressBar />
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </React.Fragment>
    );
};
