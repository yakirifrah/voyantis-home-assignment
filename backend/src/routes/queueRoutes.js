const express = require('express');
const router = express.Router();
const { getQueueStats, postMessage, getMessage } = require('../controllers/queueController');

router.get('/num_of_messages', getQueueStats);
router.post('/:queue_name', postMessage);
router.get('/:queue_name', getMessage);

module.exports = router;