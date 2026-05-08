import { prisma } from "../lib/db"
import { hash } from "bcryptjs"

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: "umum" },
    update: {},
    create: { name: "Umum", slug: "umum" },
  })

  const passwordHash = await hash("password123", 10)

  await prisma.user.upsert({
    where: { email: "admin@pos.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@pos.com",
      passwordHash,
      role: "ADMIN",
    },
  })

  await prisma.product.createMany({
    data: [
      {
        sku: "SKU-001",
        barcode: "8990001",
        name: "Mineral Water",
        categoryId: category.id,
        costPrice: 3000,
        sellPrice: 5000,
        stock: 100,
        minStock: 10,
        status: "ACTIVE",
      },
      {
        sku: "SKU-002",
        barcode: "8990002",
        name: "Coffee Latte",
        categoryId: category.id,
        costPrice: 8000,
        sellPrice: 15000,
        stock: 50,
        minStock: 5,
        status: "ACTIVE",
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
