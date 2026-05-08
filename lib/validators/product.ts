import { z } from "zod"

export const productSchema = z.object({
  name: z.string().min(2),
  sku: z.string().min(2),
  barcode: z.string().optional().nullable(),
  categoryId: z.string().min(1),
  costPrice: z.coerce.number().min(0),
  sellPrice: z.coerce.number().min(0),
  stock: z.coerce.number().int().min(0),
  minStock: z.coerce.number().int().min(0),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  description: z.string().optional().nullable(),
})

export type ProductInput = z.infer<typeof productSchema>
