import { Context } from "../../..";

export const query = {
  products: async (_: any, { onlyAvailable, category }: any, { db }: Context) => {
    const products = await db.product.findMany({
      where: {
        quantity: onlyAvailable ? { gt: 0 } : undefined,
        category: {
          name: category,
        },
      },
      // é possível fazer um include aqui e evitar o problema N+1, mas para efeito de demonstração, vamos usar o dataloader
      // include: {
      //   category: true
      // }
    });
    return products;
  },
};
