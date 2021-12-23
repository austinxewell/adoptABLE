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
    //auth token
    me: async(parent, args, context) => {
      if (context.user){
      const userData = await User.findOne({_id: context.user._id})
      .select('-__V -password')
      .populate('adoptedFamily')
      .populate('products');
      
      return userData;
      }
      
      throw new AuthenticationError('Not logged in');
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
      .populate('users')
      .populate('tags');
    },
    //get all categories
    categories: async () => {
      return Category.find()
      .select('-__v -password')
      .populate('products');
    },
    //get all categories by categoryName
    category: async (parent, { categoryName }) => {
      return Category.findOne({ categoryName })
        .select('-__v -password')
        .populate('products');
    },
    //get all tags
    tags: async () => {
      return Tag.find();
    },
    //get tag by tagName
    tag: async(parent, { tagName }) => {
      return Tag.findOne({ tagName })
      .select('-__v -password');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        
        console.log(user)
        return { user, token, username, email };
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
    addAdoptedFamily: async (parent, { adoptedFamilyId }, context) => {

        if (context.user) {

            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { adoptedFamily: adoptedFamilyId }},
                { new: true, runValidators: true }
            ).populate('adoptedFamily');

            return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
    deleteAdoptedFamily: async (parent, { adoptedFamilyId }, context) => {
        if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { adoptedFamily: adoptedFamilyId } },
                { new: true, runValidators: true }
            );

            return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
    addProduct: async (parent, { productName, productNote }, context) => {

      if (context.user) {

          var product = await Product.create({ productName, productNote , username: context.user.username });

         await User.findByIdAndUpdate( 
              { _id: context.user._id },
              { $push: { products: product } },
              { new: true, runValidators: true},
              );

          product = await Product.findOneAndUpdate(
            { _id: product._id },
            { $addToSet: { users: context.user._id}},
            { new: true, runValidators: true}, 
          ).populate('users');

          return product         
      }

      throw new AuthenticationError('You need to be logged in!');
  },
  deleteProduct: async (parent, { productId }, context) => {
    if (context.user) {
        var product = await Product.findOne();
        var productId = product._id;
        const updatedProduct = await Product.findByIdAndRemove(
            { _id: product._id }
        );
        
        console.log(updatedProduct);
        return updatedProduct;
    }

    throw new AuthenticationError('You need to be logged in!');
},
}
};

module.exports = resolvers;