require("dotenv").config()

const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const result = await axios({
    method: "GET",
    url: "https://api.stripe.com/v1/skus",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_SECRET}`,
    },
  })

  if (result.errors) {
    reporter.panic("Error loading skus", JSON.stringify(result.errors))
  }

  const skuList = result.data

  skuList.data.forEach(sku => {
    const node = {
      ...sku,
      id: createNodeId(`Stripe-${sku.id}`),
      name: sku.attributes.name,
      slug: sku.attributes.name,
      internal: {
        type: "StripeSku",
        contentDigest: createContentDigest(sku),
      },
    }

    actions.createNode(node)
  })
}

exports.createResolvers = ({ createResolvers }, options) => {
    const basePath = options.basePath || '/';
  
    // Quick-and-dirty helper to convert strings into URL-friendly slugs.
    const slugify = str => {
        console.log('Strang', str)
      const slug = str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
  
      return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
    };
  
    createResolvers({
      StripeSku: {
        slug: {
          resolve: source => slugify(source.name)
        }
      }
    });
  };