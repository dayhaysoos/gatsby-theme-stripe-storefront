/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import PlanList from '../components/plan-list'
import DonateList from '../components/donate-list'

const PlansTemplate = () => {
  const [donateState, setState] = useState({
    isSubscribing: false,
  })

  const { isSubscribing } = donateState

  const data = useStaticQuery(graphql`
    query {
      allStripePlan {
        nodes {
          id
          name
          amount
          amount_decimal
          billing_scheme
          currency
          interval
          interval_count
          nickname
          product
          usage_type
          planID
        }
      }
      allStripeSku {
        nodes {
          id
          name
          price
          currency
          skuID
        }
      }
    }
  `)

  const plans = data.allStripePlan.nodes

  const skus = data.allStripeSku.nodes

  return (
    <Layout>
      <section sx={{ variant: 'section.donateForm' }}>
        <button
          sx={{
            variant: isSubscribing
              ? 'planList.button'
              : 'planList.button.lastClicked',
          }}
          onClick={() => setState({ isSubscribing: false })}
        >
          Give Once
        </button>
        <button
          sx={{
            variant: isSubscribing
              ? 'planList.button.lastClicked'
              : 'planList.button',
          }}
          onClick={() => setState({ isSubscribing: true })}
        >
          Monthly
        </button>
        {isSubscribing ? (
          <PlanList plans={plans} />
        ) : (
          <DonateList skus={skus} />
        )}
      </section>
    </Layout>
  )
}

export default PlansTemplate
