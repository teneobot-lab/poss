import { z } from "zod"

export const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "CASHIER", "SUPERVISOR"]),
  isActive: z.coerce.boolean().optional(),
})

export type UserInput = z.infer<typeof userSchema>
