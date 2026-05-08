import { z } from "zod"

export const transactionFilterSchema = z.object({
  startDate: z.string().optional().nullable(),
  endDate: z.string().optional().nullable(),
  paymentMethod: z.enum(["CASH", "CARD", "QRIS"]).optional().nullable(),
  status: z.enum(["SUCCESS", "PENDING", "VOID", "REFUNDED"]).optional().nullable(),
  cashierId: z.string().optional().nullable(),
})
