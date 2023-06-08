// This function will format a number into a currency format by using the Intl.NumberFormat constructor
// and the navigator.language property to get the user's locale.
export default function formatCurrency(amount) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "GBP"
  }).format(amount)
}
