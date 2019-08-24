import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SkuList from '../components/sku-list';

const SkusTemplate = () => {
  useEffect(() => {
    // window.Stripe(process.env.STRIPE_API_SECRET)
    console.log('yooo', process.env.GATSBY_TEST);
  });

  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
        }
      }
    }
  `);

  const skus = data.allStripeSku.nodes;

  return (
    <Layout>
      <SkuList skus={skus} />
    </Layout>
  );
};

export default SkusTemplate;
