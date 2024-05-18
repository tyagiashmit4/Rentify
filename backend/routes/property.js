const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty, likeProperty, interestedInProperty } = require('../controllers/propertyController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addProperty);
router.get('/', getProperties);
router.put('/:id', authenticateJWT, updateProperty);
router.delete('/:id', authenticateJWT, deleteProperty);
router.post('/:id/like', likeProperty);
router.post('/:id/interested', authenticateJWT, interestedInProperty);

module.exports = router;
