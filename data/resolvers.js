import { Friends, Aliens } from './dbConnectors';

export const resolvers = {
  Query: {
    getOneFriend: async (root, { id }) => {
      try {
        const friend = await Friends.findById(id);
        return friend;
      } catch (err) {
        console.error(err);
      }
    },
    getOneAlien: async (root, { id }) => {
      try {
        const alien = await Aliens.findById(id);
        return alien;
      } catch (err) {
        console.error(err);
      }
    },
    getAllFriends: () => {
      return Friends.find();
    },
    getAllAliens: () => {
      return Aliens.findAll();
    },
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts,
      });
      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },
    updateFriend: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Friends.findByIdAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, friend) => {
            if (err) reject(err);
            else resolve(friend);
          },
        );
      });
    },
    deleteFriend: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.findByIdAndDelete({ _id: id }, (err, friend) => {
          if (err) reject(err);
          else resolve('Friend deleted successfully!');
        });
      });
    },
    createAlien: (root, { input }) => {
      const newAlien = new Aliens({
        firstName: input.firstName,
        lastName: input.lastName,
        planet: input.planet,
      });
      newAlien.id = newAlien._id;

      return new Promise((resolve, reject) => {
        newAlien.save((err) => {
          if (err) reject(err);
          else resolve(newAlien);
        });
      });
    },
  },
};
