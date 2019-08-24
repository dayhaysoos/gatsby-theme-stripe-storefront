import React, { useEffect } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';
import Sku from '../components/sku';

const SkusTemplate = () => {

    const data = useStaticQuery(graphql`
      query {
        stripeSku {
            name
            price
            product
            image
            product
            skuID
          }
      }
    `);

    const sku = data.stripeSku

    return (
        <Layout>
            <Sku {...sku} />
        </Layout>
    )
}


export default SkusTemplate;