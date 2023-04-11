import { Context } from "../../..";
import { MutationProductAddArgs, MutationProductUpdateArgs } from "../../generated";

export const mutation = {
  productAdd: async (_: any, { input }: MutationProductAddArgs, { db }: Context) => {
    const product = await db.product.create({
      data: {
        ...input,
      },
    });
    return { id: product.id, errors: [] };
  },
  productUpdate: async (_: any, { input }: MutationProductUpdateArgs, { db }: Context) => {
    const product = await db.product.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
    });
    return { id: product.id, errors: [] };
  },
  productDelete: async (_: any, { id }: any, { db }: Context) => {
    await db.product.delete({
      where: {
        id,
      },
    });
    return { id, errors: [] };
  },
};
