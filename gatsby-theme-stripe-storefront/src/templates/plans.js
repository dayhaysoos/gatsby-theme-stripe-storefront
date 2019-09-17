import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import PlanList from '../components/plan-list'

const PlansTemplate = () => {
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
    }
  `)

  const plans = data.allStripePlan.nodes

  return (
    <Layout>
      <PlanList plans={plans} />
    </Layout>
  )
}

export default PlansTemplate
