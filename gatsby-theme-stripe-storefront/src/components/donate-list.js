/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Formik, Field } from 'formik'
import { formatPrice } from '../util/formatPrice'
import { useCart } from '../context/shopping-cart'

const DonateList = ({ skus }) => {
  const { storeLastClicked, lastClicked, redirectToDonate } = useCart()

  return (
    <>
      <div sx={{ variant: 'planList.div' }}>
        {skus.map(sku => (
          <button
            type={'submit'}
            onClick={() => storeLastClicked(sku.skuID)}
            sx={{
              variant:
                lastClicked === sku.skuID
                  ? 'planList.button.lastClicked'
                  : 'planList.button',
            }}
            key={sku.id}
          >
            {`$${sku.price}`}
          </button>
        ))}
      </div>
      <button
        onClick={() => redirectToDonate(lastClicked)}
        sx={{ variant: 'planList.button' }}
      >
        Donate Once
      </button>
    </>
  )
}

export default DonateList
