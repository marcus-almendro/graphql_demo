import { Context } from "../../..";

export const query = {
  categories: async (_: any, __: any, { db }: Context) => {
    const categories = await db.category.findMany();
    return categories;
  },
};

