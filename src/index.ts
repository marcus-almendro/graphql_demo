import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { resolvers } from "./graphql/resolvers";
import { Prisma, PrismaClient } from "@prisma/client";

export interface Context {
  db: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}

export const db = new PrismaClient();

const typeDefsStr = readFileSync(require.resolve("./graphql/schema.graphql")).toString("utf-8");

const typeDefs = gql`
  ${typeDefsStr}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => console.log(`Listening on ${url}`));
