const faker = require('faker');

const db = require('../config/connection')
const { Product, User, Category, Tag } = require('../models');

db.once('open', async () => {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});
    await Tag.deleteMany({});

    //create User Data
    const userData = [];
    const categoryData = [];

      for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
    
        userData.push({ username, email, password });
      }

      const createdUser = await User.collection.insertMany(userData);
      
      // create adopted families
      for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
        const { _id: userId } = createdUser.ops[randomUserIndex];
        
        let adoptedFamilyId = userId;
        
        while (adoptedFamilyId === userId) {
          const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
          adoptedFamilyId = createdUser.ops[randomUserIndex];
        }
    
        await User.updateOne({ _id: userId }, { $addToSet: { adoptedFamily: adoptedFamilyId } });
      }

      //create categories
      for (let i = 0; i < 10; i+= 1) {
        const categoryName = faker.lorem.words(Math.round(Math.random() * 2) + 1);

        categoryData.push({ categoryName });
      }
    
        const createdCategory = await Category.collection.insertMany(categoryData);

      for (let i = 0; i < 20; i+= 1) {
        const randomCategoryIndex = Math.floor(Math.random() * createdCategory.ops.length);
        const { _id: categoryId } = createdCategory.ops[randomCategoryIndex];

        let productCategoryId = categoryId;

        while (productCategoryId === categoryId) {
          const randomCategoryIndex = Math.floor(Math.random() * createdCategory.ops.length);
          productCategoryId = createdCategory.ops[randomCategoryIndex];
        }

        await Product.updateOne({ _id: categoryId}, {$addToSet: { products: productCategoryId }});
      }
  
        // create products
    let createdProducts = [];
    for (let i = 0; i < 100; i += 1) {
      const productName = faker.lorem.words(Math.round(Math.random() * 2) + 1);
      const productNote = faker.lorem.words(Math.round(Math.random() * 20) + 1);

      const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
      const { username, _id: userId } = createdUser.ops[randomUserIndex];

      const randomCategoryIndex = Math.floor(Math.random() * createdCategory.ops.length);
      const { categoryName, _id: categoryId } = createdCategory.ops[randomCategoryIndex];

      const createdProduct = await Product.create({ productName, productNote, username, categoryName });
      
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { products: createdProduct._id } }
      );

    createdProducts.push(createdProducts);
  }

    //   // create tags
    //   let createdTags = [];
    //   for (let i = 0; i < 100; i += 1) {
    //     const tagName = faker.lorem.words(Math.round(Math.random() * 2) + 1);
  
    //     const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
    //     const { username, _id: userId } = createdUser.ops[randomUserIndex];
  
    //     const randomProductIndex = Math.floor(Math.random() * createdProduct.ops.length);
    //     const { productName, _id: productId } = createdProduct.ops[randomProductIndex];
  
    //     const createdTag = await Tag.create({ tagName, productName, productId });
        
    //     const updatedProduct = await Product.updateOne(
    //       { _id: productId },
    //       { $push: { tags: createdTags._id } }
    //     );
  
    //   createdTags.push(createdTags);
    // }


  console.log('all done!');
  process.exit(0);
});