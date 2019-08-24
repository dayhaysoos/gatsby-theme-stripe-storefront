/** @jsx jsx */
import React, { Component } from 'react';
import { Styled, jsx } from 'theme-ui'

class Sku extends Component {

    componentDidMount = () => {
        this.stripe = window.Stripe(process.env.STRIPE_API_PUBLIC)
    }

    redirectToCheckout =  async (event) => {
        event.preventDefault();

        const { skuID } = this.props;


        const { error } = await this.stripe.redirectToCheckout({
            items: [{ sku: skuID, quantity: 1 }],
            successUrl: `http://localhost:8000/page-2/`,
            cancelUrl: `http://localhost:8000/`,
        })
        if (error) {
            console.warn("Error:", error)
        }

    }

    render() {

        const { name, price, image } = this.props;

        return (
            <div>
                <a onClick={this.redirectToCheckout}>
                    <Styled.img src={image} />
                    <Styled.p>{name}</Styled.p>
                </a>
                <Styled.p>$ {price}</Styled.p>
            </div>
        )

    }
}


export default Sku;