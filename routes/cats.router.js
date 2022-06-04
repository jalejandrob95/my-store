const express = require('express');
const CatsService = require('../services/cat.service');

const router = express.Router();
const service = new CatsService();

router.get('/', async (req, res, next) => {
  try {
    const getCats = await service.find();
    res.status(200).json(getCats);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next ) => {
  try {
    const { id } = req.params;
    const findOneCat = await service.findOne(id);
    res.status(200).json(findOneCat);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCat = await service.create(body);
    res.status(201).json(newCat);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedCat = await service.update(id, body);
    res.status(201).json(updatedCat);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCat = await service.delete(id);
    res.status(202).json(deletedCat);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
