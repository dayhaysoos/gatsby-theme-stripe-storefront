/** @jsx jsx */
import React from 'react';
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui';

const Layout = ({ children }) => (
    <ThemeLayout>
        <Header>
            <h1>Gatsby Theme Stripe Storefront</h1>
        </Header>
            <Main>
                {children}
            </Main>
    </ThemeLayout>
);

export default Layout;

