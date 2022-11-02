const express = require('express');
const db = require('../SQLData');

const ComputerController = {};

const getParts = 'SELECT * FROM parts';

ComputerController.getComputerParts = async (req, res, next) => {
  try {
    const result = await db.query(getParts);
    // console.log('result.rows', result.rows);
    res.locals.parts = result.rows;
    return next();
    // console.log(req.body, req.params);
  } catch (err) {
    next({
      log: `computerController.getComputerParts`,
      message: `ERROR ${err} ComputerController.getComputerParts`,
    });
  }
};

ComputerController.addComputerParts = async (req, res, next) => {
  try {
    const { price, part } = req.body;
    // console.log(req.body);
    const text = 'INSERT INTO parts(part, price) VALUES ($1, $2)';
    const params = [part, price];
    const result = await db.query(text, params);
    // console.log(result);
    res.locals.parts = result;
    // console.log('result', result);
    next();
  } catch (err) {
    next({
      log: `computerController.addComputerParts`,
      message: `ERROR ${err} ComputerController.addComputerParts`,
    });
  }
};

ComputerController.updateComputerParts = async (req, res, next) => {
  try {
    console.log('req.query', req.query);
    const { _id, part, price } = req.query;
    // console.log(req.body);
    const text = `UPDATE parts SET part=$1, price=$2 WHERE _id=$3 RETURNING *`;
    const params = [part, price, _id];
    // console.log('params', params);
    const result = await db.query(text, params);
    // console.log(result);
    res.locals.update = result;
    // console.log(result.rows);
    // console.log(res.locals.update);
    next();
  } catch (err) {
    next({
      log: `computerController.updateComputerParts`,
      message: `ERROR ${err} ComputerController.updateComputerParts`,
    });
  }
};

ComputerController.deleteComputerParts = async (req, res, next) => {
  try {
    const { _id } = req.query;
    console.log(req.query);
    const text = `DELETE FROM parts WHERE _id=$1`;
    const params = [_id];
    console.log(params);
    const result = await db.query(text, params);
    res.locals.delete = result;
    next();
  } catch {
    next({
      log: `computerController.deleteComputerParts`,
      message: `ERROR ${err} ComputerController.deleteComputerParts`,
    });
  }
};

module.exports = ComputerController;
