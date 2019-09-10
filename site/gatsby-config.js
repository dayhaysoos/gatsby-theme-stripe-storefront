require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: '@dayhaysoos/gatsby-theme-stripe-storefront',
      options: {
        stripeSecretKey: process.env.STRIPE_API_SECRET,
        stripePublicKey: process.env.STRIPE_API_PUBLIC
      }
    }
  ]
};
