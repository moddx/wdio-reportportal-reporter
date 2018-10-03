/* eslint-disable no-unused-vars,import/no-extraneous-dependencies */
const { expect } = require('chai');
const { Given, Then, When } = require('cucumber');

Given('I visit {string}', (url) => {

});

When('I click the clickable region', () => { console.log(); });

Then('I should get the result: {int}', (num) => {
  expect(num).to.be.equal(1);
});

Then('I run failing step', () => {
  expect(true).to.be.equal(false);
});

Then('I see steps after as pending', () => {
  expect(true).to.be.equal(true);
});
