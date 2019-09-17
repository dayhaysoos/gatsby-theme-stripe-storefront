const formatPrice = num => {
  const price = (num / 100).toFixed(2)
  return price
}

export { formatPrice }
