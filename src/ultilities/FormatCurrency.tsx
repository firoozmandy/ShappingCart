const Currency = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export default function FormatCurrency(number: number) {
  return Currency.format(number);
}
