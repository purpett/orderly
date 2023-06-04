export default function formatCurrency(amount) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "GBP"
  }).format(amount)
}
