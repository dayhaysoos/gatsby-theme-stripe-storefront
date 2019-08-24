/** @jsx jsx */
import React from 'react';
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui';

const Layout = ({ children }) => (
    <ThemeLayout>
        <Header>
            <h1 sx={{ variant: 'test.primary'}}>Gatsby Theme Stripe Storefront</h1>
        </Header>
        <div sx={{
            variant: 'custom.thing'
        }}>
            <p>Hi</p>
        </div>
            <Main>
                {children}
            </Main>
    </ThemeLayout>
);

export default Layout;

