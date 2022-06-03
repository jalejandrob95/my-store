const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const cats = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    cats.push({
      name: faker.name.firstName(),
      breed: faker.animal.cat(),
      photo: faker.image.cats(),
    });
  }
  res.json(cats);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    photo: faker.image.cats(),
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Cat created successfully',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Cat update successfully',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Cat delete successfully',
    id,
  });
});

module.exports = router;
