const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CatsService {
  constructor() {
    this.cats = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.cats.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        breed: faker.animal.cat(),
        photo: faker.image.cats(),
      });
    }
  }

  async create(data) {
    const newCat = {
      id: faker.datatype.uuid(),
      ...data,
    };
    const createCat = this.cats.push(newCat);
    if(createCat === 0) {
      throw boom.badData('Cat is not created');
    }
    return newCat;
  }

  async find() {
    const cats = this.cats;
    if (cats.length === 0) {
      throw boom.notFound('Cats not found');
    }
    return cats;
  }

  async findOne(id) {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      throw boom.notFound('Cat not found');
    }
    return cat;
  }

  async update(id, changes) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index === -1) {
      throw boom.resourceGone('Cat not updated');
    }
    const cats = this.cats[index];
    this.cats[index] = {
      ...cats,
      ...changes,
    };
    return { message: 'the cat has update', id, changes };
  }

  async delete(id) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index === -1) {
      throw boom.forbidden('Cat not found');
    }
    this.cats.splice(index, 1);
    return { message: 'the cat has delete', id };
  }
}

module.exports = CatsService;
