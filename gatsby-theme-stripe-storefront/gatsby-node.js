require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const axios = require('axios');

// grab sku data from stripe api

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter
}) => {

  exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
    type StripeSku implements Node @dontInfer {
        id: ID!
        name: String!
        url: String!
        slug: String!
        image: String!
        skuID: String!
    }
    `)
  }

  const result = await axios({
    method: 'GET',
    url: 'https://api.stripe.com/v1/skus',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_SECRET}`
    }
  });

  if (result.errors) {
    reporter.panic('Error loading skus', JSON.stringify(result.errors));
  }

  const skuList = result.data;

  // format sku data to something more desirable
  // create nodeId in the process
  // create type in internal Object

  skuList.data.forEach(sku => {
    const node = {
      ...sku,
      skuID: sku.id,
      id: createNodeId(`Stripe-${sku.id}`),
      name: sku.attributes.name,
      slug: sku.attributes.name,
      image: sku.image ? sku.image : 'no-image',
      internal: {
        type: 'StripeSku',
        contentDigest: createContentDigest(sku)
      }
    };

    // create node with processed data

    actions.createNode(node);
  });
};

// create url slug for each product
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
  };

  const formatPrice = num => {
    const price = (num / 100).toFixed(2);
    return price;
  };

  // reformat "slug" value in this resolver
  createResolvers({
    StripeSku: {
      slug: {
        resolve: source => slugify(source.name)
      },
      price: {
        resolve: source => formatPrice(source.price)
      }
    }
  });
};

// create pages for each item

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/skus.js')
  });

  const result = await graphql(`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
          skuID
        }
      }
    }
  `);

  if (result.erros) {
    reporter.panic('error loading products', reporter.errors);
  }

  const skus = result.data.allStripeSku.nodes;

  skus.forEach(sku => {
    const slug = sku.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/sku.js'),
      context: {
        slug
      }
    });
  });
};
