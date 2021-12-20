const { Adoptee, Product, Category } = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get all users
    adoptees: async () => {
      return Adoptee.find()
        .select('-__v -password')
        .populate('adoptedFamily')
        .populate('products');
    },
    // get a user by username
    adoptee: async (parent, { username }) => {
      return Adoptee.findOne({ username })
        .select('-__v -password')
        .populate('adoptedFamily')
        .populate('products');
    },
    products: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id });
    },
    categories: async () => {
      return Category.find()
      // .select('-__v -password')
      .populate('products');
    }
  },
  Mutation: {
    addAdoptee: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { user, token };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);
        return { user, token };
    },
    saveAdoptedFamily: async (parent, { input }, context) => {

        if (context.user) {

            const user = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { adoptedFamily: { ...input } }},
                { new: true, runValidators: true }
            );

            return user;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
    removeAdoptedFamily: async (parent, { adopteeId }, context) => {
        if (context.user) {
            const user = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { adoptedFamily: { adopteeId } } },
                { new: true, runValidators: true }
            );

            return user;
        }
    },
    saveProduct: async (parent, { input }, context) => {

      if (context.user) {

          const user = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $addToSet: { products: { ...input } }},
              { new: true, runValidators: true }
          );

          return user;
      }

      throw new AuthenticationError('You need to be logged in!');
  },
  removeProducts: async (parent, { adopteeId }, context) => {
    if (context.user) {
        const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { products: { productId } } },
            { new: true, runValidators: true }
        );

        return user;
    }
},
}
};

module.exports = resolvers;