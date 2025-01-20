const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

function generateRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email(firstName, lastName);
  const password = faker.internet.password();

  return {
    firstName,
    lastName,
    email,
    password
  };
}

function generateFixtureData() {
  return [generateRandomUser()];
}

const fixturesPath = path.join(__dirname, 'fixtures');

if (!fs.existsSync(fixturesPath)) {
  fs.mkdirSync(fixturesPath);
}

const data = generateFixtureData();
const filePath = path.join(fixturesPath, 'user.json');

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`Dados gerados e salvos em ${filePath}`);
