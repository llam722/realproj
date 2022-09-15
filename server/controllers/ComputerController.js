const express = require('express');
const db = require('../SQLData');

const ComputerController = {};

const getParts = 'SELECT * FROM parts';

ComputerController.getComputerParts = async (req, res, next) => {
  try {
    // const result = await db.query(getParts);
    // console.log('line12', result.rows);
    // res.locals.parts = result.rows;
    // return next();
    console.log(req.body, req.params);
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
    // const { part, price } = obj;
    // const obj = {};
    // obj.part = 'RTX3090';
    // obj.price = 2000;
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
    const { _id, part, price } = req.body;
    const text = `UPDATE parts SET part=$1, price=$2 WHERE _id=$3`;
    const params = [part, price, _id];
    console.log(params);
    const result = await db.query(text, params);
    res.locals.update = result;
    next();
  } catch {
    next({
      log: `computerController.updateComputerParts`,
      message: `ERROR ${err} ComputerController.updateComputerParts`,
    });
  }
};

ComputerController.deleteComputerParts = async (req, res, next) => {
  try {
    const { _id } = req.body;
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
