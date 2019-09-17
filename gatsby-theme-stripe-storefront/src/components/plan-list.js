/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Formik, Field } from 'formik'
import { formatPrice } from '../util/formatPrice'
import { useCart } from '../context/shopping-cart'

const PlanList = ({ plans }) => {
  const { redirectToDonate } = useCart()

  return (
    <main sx={{ variant: 'planList.main' }}>
      <div sx={{ variant: 'planList.div' }}>
        {plans.map(plan => (
          <button
            type={'submit'}
            onClick={() => redirectToDonate(plan.planID)}
            sx={{ variant: 'planList.button' }}
            key={plan.id}
          >
            {`$${formatPrice(plan.amount)}`}
          </button>
        ))}
      </div>
      <button sx={{ variant: 'planList.button' }}>Donate</button>
    </main>
  )
}

export default PlanList
