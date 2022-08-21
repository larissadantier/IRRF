export function formatBRL(money) {
  return new Intl.NumberFormat("BRL", {
    style: "currency",
    currency: "BRL",
  }).format(money);
}
