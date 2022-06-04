const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const age = joi.number();
const breed = joi.string();
const weight = joi.number();
const owner = joi.string();

const createCatSchema = joi.object({
  name: name.required(),
  age: age.required(),
  breed: breed.required(),
  weight: weight.optional(),
  owner: owner.optional(),
});

const updateCatSchema = joi.object({
  name: name,
  age: age,
  breed: breed,
  weight: weight,
  owner: owner,
});

const getCatSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createCatSchema,
  updateCatSchema,
  getCatSchema,
};
