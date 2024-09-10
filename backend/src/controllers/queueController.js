const queueService = require('../services/queueService');
const constants = require('../utils/constants');

exports.createQueue = async (req, res) => {
  const { queue_name } = req.body;
  queueService.createQueue(queue_name);
  res.status(200).send({ message: `Queue '${queue_name}' created.` });
}

exports.postMessage = async (req, res) => {
  const { queue_name } = req.params;
  const message = req.body;
  queueService.addMessageToQueue(queue_name, message);
  res.status(200).send({ message: 'Message added to queue' });
}

exports.getMessage = async (req, res) => {
  const { queue_name } = req.params;
  const timeout = parseInt(req.query.timeout) || constants.TIME_OUT_MS;
  const message = await queueService.getMessageFromQueue(queue_name, timeout);
  if (message) {
    res.status(200).send(message);
  } else {
    res.status(204).send();
  }
}

exports.getQueueStats = (_req, res) => {
  const stats = queueService.getQueueStats();
  console.log('Queue Stats:', JSON.stringify(stats, null, 2));
  res.status(200).json(stats);
}
