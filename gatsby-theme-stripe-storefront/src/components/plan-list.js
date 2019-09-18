/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Formik, Field } from 'formik'
import { formatPrice } from '../util/formatPrice'
import { useDonate } from '../context/donate-form'

const PlanList = ({ plans }) => {
  const { storeLastClicked, lastClicked, redirectToCheckout } = useDonate()

  return (
    <main sx={{ variant: 'planList.main' }}>
      <div sx={{ variant: 'planList.div' }}>
        {plans.map(plan => (
          <button
            type={'submit'}
            onClick={() => storeLastClicked(plan.planID)}
            sx={{
              variant:
                lastClicked === plan.planID
                  ? 'planList.button.lastClicked'
                  : 'planList.button',
            }}
            key={plan.id}
          >
            {`$${formatPrice(plan.amount)}`}
          </button>
        ))}
      </div>
      <button
        onClick={() => redirectToCheckout(lastClicked)}
        sx={{ variant: 'planList.button' }}
      >
        Donate Monthly
      </button>
    </main>
  )
}

export default PlanList
