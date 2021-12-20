const { Adoptee, Product, Category } = require("../models") 

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
      .select('-__v -password')
      .populate('products');
    }
  }
};
  
  module.exports = resolvers;