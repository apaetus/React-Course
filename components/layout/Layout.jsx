import React from "react"

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </React.Fragment>
    );
};