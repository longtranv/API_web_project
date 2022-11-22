const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const fileValidate = require('../../validations/file.validation');
const fileController = require('../../controllers/file.controller');


const router = express.Router();

router.post('/upload',auth(),validate(fileValidate.fileUpload),fileController.uploadImage); 