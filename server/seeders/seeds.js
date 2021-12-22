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

      for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
    
        userData.push({ username, email, password });
      }

      console.log('---> Users Created <---')

      const createdUser = await User.collection.insertMany(userData);
      
      // create Adopted Family
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

      console.log('---> Adopted Family Data added to Users <---')

      // create Category
      const categoryData = [];

      for (let i = 0; i < 10; i+=1) {
        const categoryName = faker.commerce.department();
        
        categoryData.push({categoryName});
      }

      console.log('---> Categories Created <---')

      const createdCategory = await Category.collection.insertMany(categoryData);
  
      // create products
      const productData = [];

      for(let i = 0; i < 20; i += 1) {
        const productName = faker.commerce.productName();
        const productNote = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        productData.push({ productName, productNote });
      }

      console.log('---> Products Created <---')

      const createdProduct = await Product.collection.insertMany(productData);

      //create products for users
      for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
        const { _id: userId } = createdUser.ops[randomUserIndex];

        let productId = userId;

        while (productId === userId) {
          const randomUserIndex = Math.floor(Math.random() * createdProduct.ops.length);
          productId = createdProduct.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { products: productId } })
        await Product.updateOne({ _id: productId }, { $addToSet: { users: userId } })
      }

      console.log('---> Added Products to Users <---')
      console.log('---> Added Users to Products <---')

      //create products for categories
      for (let i = 0; i < 100; i += 1) {
        const randomCategoryIndex = Math.floor(Math.random() * createdCategory.ops.length);
        const { _id: categoryId } = createdCategory.ops[randomCategoryIndex];
  
        let productId = categoryId;
  
        while (productId === categoryId) {
          const randomCategoryIndex = Math.floor(Math.random() * createdProduct.ops.length);
          productId = createdProduct.ops[randomCategoryIndex];
        }
  
        await Category.updateOne({ _id: categoryId }, { $addToSet: { products: productId }})
      } 

      console.log('---> Added Products to Categories <---')


      // create tags
      const tagData = [];

      for (let i = 0; i < 50; i += 1) {
        const tagName = faker.commerce.productAdjective();

        tagData.push({ tagName })
    }

    console.log(tagData)

    console.log('---> Added Tags <---')

  console.log('Data has been seeded!');
  process.exit(0);
});