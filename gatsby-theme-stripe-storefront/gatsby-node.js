require("dotenv").config()

const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
    console.log('bearer ', process.env)
  const result = await axios({
    method: "GET",
    url: "https://api.stripe.com/v1/products",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_SECRET}`,
    },
  })

  if (result.errors) {
    reporter.panic("Error loading products", JSON.stringify(result.errors))
  }

  const productList = result.data

  productList.data.forEach(product => {
    const node = {
      ...product,
      id: createNodeId(`Stripe-${product.id}`),
      internal: {
        type: "StripeProduct",
        contentDigest: createContentDigest(product),
      },
    }

    actions.createNode(node)
  })
}