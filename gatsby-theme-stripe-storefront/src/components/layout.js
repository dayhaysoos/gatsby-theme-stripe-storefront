
import React from 'react';
// import { Layout as ThemeLayout, Header, Main, Container } from 'theme-ui';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
    <>
        <h1>Gatsby events theme</h1>
        <div>
            <div>
                {children}
            </div>
        </div>

    </>
);

export default Layout;

