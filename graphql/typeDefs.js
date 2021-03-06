import { gql } from "graphql-tag";
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  input PaginationParams {
    limit: Int!
    offset: Int!
  }

  type Query {
    hello(name: String): String
    me: User
    getUser(id: ID!): User
    samuraiList(
      pageParams: PaginationParams = { limit: 5, offset: 0 }
    ): [Samurai!]!
    longSamuraiList(
      pageParams: PaginationParams = { limit: 5, offset: 0 }
    ): [Samurai!]!

    nepliksList: [Nepliks!]!
  }

  type Samurai {
    id: ID!
    name: String!
    nickname: String
    age: Int
  }

  input CreateSamuraiInput {
    name: String!
  }

  type Nepliks {
    id: ID!
    title: String!
    genre: String!
    duration: Int
    directedBy: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    createSamurai(input: CreateSamuraiInput!): Samurai
  }
`;
