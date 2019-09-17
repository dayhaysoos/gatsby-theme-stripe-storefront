require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require("axios")

const formatPrice = num => {
  const price = (num / 100).toFixed(2)
  return price
}

// grab sku data from stripe api
exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter },
  themeOptions
) => {
  const result = await axios({
    method: "GET",
    url: "https://api.stripe.com/v1/skus",
    headers: {
      Authorization: `Bearer ${themeOptions.stripeSecretKey}`,
    },
  })

  const plans = await axios({
    method: "GET",
    url: "https://api.stripe.com/v1/plans",
    headers: {
      Authorization: `Bearer ${themeOptions.stripeSecretKey}`,
    },
  })

  if (result.errors) {
    reporter.panic("Error loading skus", JSON.stringify(result.errors))
  }

  const skuList = result.data
  const planList = plans.data

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
      image: sku.image ? sku.image : "no-image",
      internal: {
        type: "StripeSku",
        contentDigest: createContentDigest(sku),
      },
    }

    // create node with processed data

    actions.createNode(node)
  })

  planList.data.forEach(plan => {
    const node = {
      ...plan,
      planID: plan.id,
      id: createNodeId(`Stripe-${plan.id}`),
      name: plan.nickname,
      slug: plan.nickname,
      image: plan.image ? plan.image : "no-image",
      internal: {
        type: "StripePlan",
        contentDigest: createContentDigest(plan),
      },
    }

    // create node with processed data

    actions.createNode(node)
  })
}

// create url slug for each product
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/"

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }

  // reformat "slug" value in this resolver
  createResolvers({
    StripeSku: {
      slug: {
        resolve: source => slugify(source.name),
      },
      price: {
        resolve: source => formatPrice(source.price),
      },
    },
  })
}

// create pages for each item

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/"

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/plans.js"),
  })

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
  `)

  if (result.erros) {
    reporter.panic("error loading products", reporter.errors)
  }

  const skus = result.data.allStripeSku.nodes

  skus.forEach(sku => {
    const slug = sku.slug

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/sku.js"),
      context: {
        slug,
      },
    })
  })
}
