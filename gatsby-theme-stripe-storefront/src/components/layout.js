/** @jsx jsx */
import React from 'react';
import { Layout as ThemeLayout, Main, jsx } from 'theme-ui';
import Header from './header';

const Layout = ({ children }) => (
    <ThemeLayout>
        <Header />
        <Main>            
            {children}
        </Main>
    </ThemeLayout>
);

export default Layout;

