const express = require ('express')
const auth = require('../../middlewares/auth');
const productController = require('../../controllers/product.controller');
const swaggerJSDoc = require('swagger-jsdoc');

const router = express.Router();

router.post("/", auth('manageProduct'), productController.createProduct );
router.put("/:id", auth('manageProduct'), productController.updateProduct);
router.delete("/:id", auth('manageProduct'), productController.deleteProduct);
router.get("/find/:id", productController.getProduct);
router.get("/", productController.getAllProduct);


module.exports = router;

