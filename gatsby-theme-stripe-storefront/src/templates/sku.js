import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Sku from '../components/sku';

const SkuTemplate = ({data: {sku}}) => (
    <Layout>
        <Sku {...sku} />
    </Layout>
)

export default SkuTemplate;