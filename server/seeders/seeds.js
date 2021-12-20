const faker = require('faker');

const db = require('../config/connection')
const { Product, Adoptee, Category } = require('../models');

db.once('open', async () => {
    await Product.deleteMany({});
    await Adoptee.deleteMany({});
    await Category.deleteMany({});

    //create Adoptee Data
    const adopteeData = [];
    const categoryData = [];

      for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
    
        adopteeData.push({ username, email, password });
      }

      const createdAdoptee = await Adoptee.collection.insertMany(adopteeData);
      
      // create adtpteed families
      for (let i = 0; i < 100; i += 1) {
        const randomAdopteeIndex = Math.floor(Math.random() * createdAdoptee.ops.length);
        const { _id: adopteeId } = createdAdoptee.ops[randomAdopteeIndex];
        
        let adoptedFamilyId = adopteeId;
        
        while (adoptedFamilyId === adopteeId) {
          const randomAdopteeIndex = Math.floor(Math.random() * createdAdoptee.ops.length);
          adoptedFamilyId = createdAdoptee.ops[randomAdopteeIndex];
        }
    
        await Adoptee.updateOne({ _id: adopteeId }, { $addToSet: { adoptedFamily: adoptedFamilyId } });
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

      const randomAdopteeIndex = Math.floor(Math.random() * createdAdoptee.ops.length);
      const { username, _id: adopteeId } = createdAdoptee.ops[randomAdopteeIndex];

      const randomCategoryIndex = Math.floor(Math.random() * createdCategory.ops.length);
      const { categoryName, _id: categoryId } = createdCategory.ops[randomCategoryIndex];

      const createdProduct = await Product.create({ productName, productNote, username, categoryName });
      
      const updatedAdoptee = await Adoptee.updateOne(
        { _id: adopteeId },
        { $push: { products: createdProduct._id } }
      );

    createdProducts.push(createdProducts);
  }





  console.log('all done!');
  process.exit(0);
});

