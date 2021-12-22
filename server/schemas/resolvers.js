const { User, Product, Category, Tag } = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('adoptedFamily')
        .populate('products');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('adoptedFamily')
        .populate('products');
    },
    //get all products
    products: async () => {
      return Product.find()
      .select('-__v -password')
      .populate('users')
      .populate('tags');
    },
    //get all product by productName
    product: async (parent, { productName }) => {
      return Product.findOne({ productName })
      .select('-__v -password')
      .populate('users');
    },
    //get all categories
    categories: async () => {
      return Category.find()
<<<<<<< HEAD
      .select('-__v -password')
      .populate('products');
=======
        .select('-__v -password')
        .populate('products');
    },
    //get all categories by categoryName
    category: async (parent, { categoryName}) => {
      return Category.findOne({ categoryName })
        .select('-__v -password')
        .populate('products');
    },
    //get all tags
    tags: async () => {
      return Tag.find();
>>>>>>> e07876f3b61a17e7d8c8cad94d486c3f3cff0fa4
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
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
    removeAdoptedFamily: async (parent, { userId }, context) => {
        if (context.user) {
            const user = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { adoptedFamily: { userId } } },
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
  removeProducts: async (parent, { userId }, context) => {
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