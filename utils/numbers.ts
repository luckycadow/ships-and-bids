const numberFormat = new Intl.NumberFormat()

export function isNumber(value: string) {
  return /^\d+$/.test(value)
}

export function formatNumber(value: string | number) {
  if (typeof value === 'number') {
    return numberFormat.format(value)
  }

  if (isNumber(value)) {
    return numberFormat.format(parseFloat(value))
  }

  return value
}
