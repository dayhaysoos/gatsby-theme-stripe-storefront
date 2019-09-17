import React from 'react'
import { useCart } from '../context/shopping-cart'
import { Formik } from 'formik'
import * as Yup from 'yup'

const QuantityInput = ({ quantity, skuID }) => {
  const { handleQuantityChange } = useCart()

  const updateInputValue = (e, skuID) => {
    const { value } = e.target
    handleQuantityChange(parseInt(value), skuID)
  }

  return (
    <Formik
      initialValues={{ quantity }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
      validationSchema={Yup.object().shape({
        quantity: Yup.string().required('Required'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleReset,
        } = props

        return (
          <form>
            <label htmlFor="quantity" style={{ display: 'block' }}>
              Quantity
            </label>
            <input
              id="quantity"
              placeholder="Enter Amount"
              type="number"
              defaultValue={quantity}
              onChange={e => updateInputValue(e, skuID)}
              onSubmit={e => e.preventDefault()}
              className={
                errors.quantity && touched.quantity
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.quantity && touched.quantity && (
              <div className="input-feedback">{errors.quantity}</div>
            )}
          </form>
        )
      }}
    </Formik>
  )
}

export default QuantityInput
