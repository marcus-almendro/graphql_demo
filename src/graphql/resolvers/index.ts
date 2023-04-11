import * as products from "./products";
import * as categories from "./categories";
import { Resolvers } from "../generated";

export const resolvers: Resolvers = {
  Query: {
    ...products.query,
    ...categories.query,
  },

  ...products.types,

  Mutation: {
    ...products.mutation,
    ...categories.mutation,
  },
};
