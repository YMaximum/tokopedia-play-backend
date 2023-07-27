const express = require('express');
const VideoController = require('../controller/videoController');
const ProductController = require('../controller/productController');
const CommentController = require('../controller/commentController');

const router = express.Router();

router.get('/', VideoController.getThumbnails);
router.get('/:videoID/products', ProductController.getProducts);
router.get('/:videoID/comments', CommentController.getComments);

router.post('/', VideoController.addVideo);
router.post('/:videoID/addProduct', ProductController.addProduct);
router.post('/:videoID/addComment', CommentController.addComment);


module.exports = router;