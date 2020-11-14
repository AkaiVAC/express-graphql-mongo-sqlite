import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    age: Int
    email: String
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    age: Int
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input AlienInput {
    firstName: String
    lastName: String
    planet: String
  }

  type Query {
    getOneFriend(id: ID): Friend
    getOneAlien(id: ID): Alien
    getAllFriends: [Friend]
    getAllAliens: [Alien]
  }
  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
    createAlien(input: AlienInput): Alien
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
