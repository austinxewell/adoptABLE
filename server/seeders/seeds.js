const faker = require('faker');

const db = require('../config/connection')
const { Product, Adoptee } = require('../models');

db.once('open', async () => {
    await Product.deleteMany({});
    await Adoptee.deleteMany({});

    //create Adoptee Data
    const adopteeData = [];

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
  
        // create thoughts
    let createdProducts = [];
    for (let i = 0; i < 100; i += 1) {
      const productName = faker.lorem.words(Math.round(Math.random() * 2) + 1);
      const productNote = faker.lorem.words(Math.round(Math.random() * 20) + 1);

      const randomAdopteeIndex = Math.floor(Math.random() * createdAdoptee.ops.length);
      const { username, _id: adopteeId } = createdAdoptee.ops[randomAdopteeIndex];

      const createdProduct = await Product.create({ productName, productNote, username });
      
      const updatedAdoptee = await Adoptee.updateOne(
        { _id: adopteeId },
        { $push: { products: createdProduct._id } }
      );

    createdProducts.push(createdProducts);
  }

  console.log('all done!');
  process.exit(0);
});

