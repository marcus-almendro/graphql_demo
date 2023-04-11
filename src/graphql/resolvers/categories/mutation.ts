import { Context } from "../../..";
import { MutationCategoryAddArgs, MutationCategoryUpdateArgs } from "../../generated";

export const mutation = {
  categoryAdd: async (_: any, { input }: MutationCategoryAddArgs, { db }: Context) => {
    const category = await db.category.create({
      data: {
        ...input,
      },
    });
    return { id: category.id, errors: [] };
  },
  categoryUpdate: async (_: any, { input }: MutationCategoryUpdateArgs, { db }: Context) => {
    const category = await db.category.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
    });
    return { id: category.id, errors: [] };
  },
  categoryDelete: async (_: any, { id }: any, { db }: Context) => {
    await db.category.delete({
      where: {
        id,
      },
    });
    return { id, errors: [] };
  },
};