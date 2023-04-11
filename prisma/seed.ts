import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const c = await prisma.category.create({
    data: {
      name: "Sports",
    },
  });
  const c2 = await prisma.category.create({
    data: {
      name: "Fruits",
    },
  });
  await prisma.product.create({
    data: {
      name: "Ball",
      price: 723,
      quantity: 128,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Baseball Bat",
      price: 72,
      quantity: 84,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Bike",
      price: 733,
      quantity: 0,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Binocular",
      price: 127,
      quantity: 76,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Board",
      price: 89,
      quantity: 0,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Boat",
      price: 66,
      quantity: 2,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Camera",
      price: 700,
      quantity: 2,
      categoryId: c.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "T-Shirt",
      price: 14,
      quantity: 800,
      categoryId: c.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Apple",
      price: 3,
      quantity: 2000,
      categoryId: c2.id,
    },
  });
  await prisma.product.create({
    data: {
      name: "Lemon",
      price: 3,
      quantity: 500,
      categoryId: c2.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Strawberry",
      price: 5,
      quantity: 800,
      categoryId: c2.id,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
