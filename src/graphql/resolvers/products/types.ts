import { Context } from "../../..";
import { Product } from "../../generated";
import DataLoader from "dataloader";
import { db } from "../../..";
import { Category } from "@prisma/client";

const categoryLoader = new DataLoader(async (keys) => {
  console.log("called with", keys);
  const results = await db.category.findMany({
    where: {
      id: {
        in: keys.map((k) => k as string),
      },
    },
  });
  const categoriesMap = new Map<string, Category>(results.map((i) => [i.id, i]));
  return keys.map((key) => categoriesMap.get(key as string)!);
});

export const types = {
  Product: {
    price: async (parent: Product, { currency }: any, _: any) => {
      if (currency === "USD") {
        return parent.price * 5;
      }
      return parent.price;
    },
    category: async (parent: Product, _: any, { db }: Context) => {
      // demonstração do problema N+1 sem o dataloader:
      // console.log("called with", parent.name);

      // const category = await db.category.findUnique({
      //   where: {
      //     id: parent.categoryId,
      //   },
      // });

      const category = await categoryLoader.load(parent.categoryId);
      return category;
    },
  },
};
