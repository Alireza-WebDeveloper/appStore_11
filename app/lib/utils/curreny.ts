export function formatToIranianCurrency(
  price: number,
  unit: 'rial' | 'toman' = 'toman'
): string {
  const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
  return unit === 'toman'
    ? `${formattedPrice} تومان`
    : `${formattedPrice} ریال`;
}
