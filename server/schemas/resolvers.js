const { Adoptee, Product } = require("../models") 

const resolvers = {
  Query: {
    products: async () => {
      return Product.find().sort({ createdAt: -1 });
    }
  }
};
  
  module.exports = resolvers;