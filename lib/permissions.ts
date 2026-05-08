export const roleAccess = {
  ADMIN: ["/dashboard", "/checkout", "/products", "/transactions", "/reports", "/users"],
  CASHIER: ["/checkout", "/transactions"],
  SUPERVISOR: ["/dashboard", "/transactions", "/reports"],
}
