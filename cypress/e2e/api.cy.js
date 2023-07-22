import user from '../fixtures/user'
const { addUser, getUser, checkUserNotFound, updateUser, deleteUser} = require('../support/commands');

describe('petstore api', () => {
  //в beforeEach проверяем создание пользователя
  beforeEach(() => {
    cy.addUser(user.testuser);
  });

  it('should get user', () => {
    cy.getUser(user.testuser);
    cy.deleteUser(user.testuser);
  });

  it('should update user', () => {
    cy.updateUser(user.testuser, user.update);
    cy.getUpdateUser(user.update);
    cy.deleteUser(user.update);
  });

  it('should delete user', ()=> {
    cy.deleteUser(user.testuser);
    cy.checkUserNotFound(user.testuser);
  })
})