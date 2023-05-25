const express = require('express');
const { isAuth } = require('../middleware/auth');
const { createCar, deletePost, EditPost, GetallCars, getProductDetails } = require('../controllers/Cars');

const router = express.Router();

router.route("/car/upload").post(isAuth, createCar)
router.route("/car").get(isAuth, GetallCars)
router.route("/car/:id").get(getProductDetails);

router.route("/car/:id").delete(isAuth, deletePost).patch(isAuth, EditPost)

module.exports = router
