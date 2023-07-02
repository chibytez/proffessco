import bcrypt from 'bcryptjs';
const uuidv4 = require('uuid').v4

export default {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    [
      {
        userId: uuidv4(),
        firstname: 'Chibuike',
        lastname: 'Aniaku',
        email: 'chibuikeaniaku@gmail.com',
        password: bcrypt.hashSync('Password8%', 10),
        userId: uuidv4(),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        firstname: 'frank',
        lastname: 'chidinma',
        email: 'reginaanyaso.com',
        password: bcrypt.hashSync('Password8%', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        firstname: 'frank',
        lastname: 'chidinma',
        email: 'stepbaba@andela.com',
        password: bcrypt.hashSync('Password8%', 10),
        isAdmin:true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
