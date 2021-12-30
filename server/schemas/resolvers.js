const { User, Product, Category, Tag, Conversation } = require("../models")
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
    },
    conversations: async () => {
      return Conversation.find()
      .select('-__v -password')
      .populate('members')
    },
    //find conversations related to a user 
    conversationsById: async (parent, args, context) => {
      if (context.user) {

        const conversationData = Conversation.find({members: { $in: context.user._id}})
        return conversationData
        .populate('members')
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    //create a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
        
      return { user, token, username, email };
    },
    //user log in/token generation
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
    //add a user to adoptedFamily
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
    //delete a user from adoptedFamily
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
    //create a new product and assign it to the logged in user
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

        return product;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
      //delete a product and is relation to all users.
      deleteProduct: async (parent, { productId }, context) => {
        if(context.user) {
          await Product.findByIdAndRemove(
            { _id: productId },
          );

          return (`Product with the ID: ${productId} has been removed.`)
        }

        throw new AuthenticationError('You need to be logged in!');
    },
    //create a new tag and assign it to product
    addTag: async(parent, { tagName, productId }, context) => {
      if(context.user) {
        var product = await Product.findOne({productId});
        
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: product._id },
          { $push: { tags: {tagName} } },
          { new: true, runValidators: true }
        ).populate('product');

        return updatedProduct;
      }

    throw new AuthenticationError('You need to be logged in!');
  },

     //delete a tag and is relation to product.
  deleteTag: async (parent, { tagId, productId }, context) => {
    if(context.user) {

      var product = await Product.findOne({productId});


      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: product._id },
        { $pull: { tags: {_id: tagId} }}
      ).populate('product');

      return (`Tag with the ID: ${tagId} has been removed.`);
      }
    },
    //update user details
    updateUser: async (parent, { email, familyMembers }, context) => {
      if (context.user) {

        const updatedUser = await User.findByIdAndUpdate( 
          { _id: context.user._id },
          { $set: { email: email, familyMembers: familyMembers } },
          { new: true, runValidators: true},
        ).populate('user');

        return updatedUser;
      }

    throw new AuthenticationError('You need to be logged in!');
  },
  //update product details
  updateProduct: async (parent, { productName, productNote, productId }, context) => {
    if (context.user) {
      var product = await Product.findOne({productId});
      
      const updatedProduct = await Product.findByIdAndUpdate( 
        { _id: product._id },
        { $set: { productName: productName, productNote: productNote } },
        { new: true, runValidators: true},
      ).populate('product');

      return updatedProduct;
    }

    throw new AuthenticationError('You need to be logged in!');
  },
    //adds conversation with user relations.
    addConversation: async (parent, { receiverId }, context) => {
      if(context.user) {
        var conversation = await Conversation.create({members: receiverId})
        
        conversation = await Conversation.findOneAndUpdate(
          { _id: conversation._id },
          { $addToSet: { members: context.user._id } },
          { new: true }
        ).populate('members')

        return conversation
      }
    } 
}
};

module.exports = resolvers;