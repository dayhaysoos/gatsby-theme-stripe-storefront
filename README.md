# Gatsby Theme Stripe Storefront

This is a gatsby theme for anyone that has a stripe account that wants to quickly spin up an online storefront to sell products from.

## Roadmap

[Notion](https://www.notion.so/dayhaysoos/e03b444617744e29a60a137c49467796?v=318171f8460f40a8b97b4a47cc84cf65)

## Installation

Install the theme with yarn or npm

```bash
yarn add @dayhaysoos/gatsby-theme-stripe-storefront
```

```bash
npm install @dayhaysoos/gatsby-theme-stripe-storefront
```

## Usage

Include it in your gatsby-config.js file at the root of your site:


```
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
```

## TODO
```
Add more to readme
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)