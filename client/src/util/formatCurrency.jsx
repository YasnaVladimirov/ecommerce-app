const currency = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"} );

function formatCurrency (num) {
  return currency.format(num);
}

export default formatCurrency;