const constants = require('../utils/constants');
const queues = {};


exports.addMessageToQueue = (queueName, message) => {
  if (!queues[queueName]) {
    queues[queueName] = [];
  }
  queues[queueName].push(message);
}

exports.getMessageFromQueue = (queueName, timeout = constants.TIME_OUT_MS) => {
  return new Promise((resolve) => {
    const checkQueue = () => {
      if (queues[queueName] && queues[queueName].length > 0) {
        resolve(queues[queueName].shift());
      } else if (timeout <= 0) {
        resolve(null);
      } else {
        timeout -= 100; 
        setTimeout(checkQueue, 100);
      }
    };

    checkQueue();
  });
}

exports.getQueueStats = () => {
  return Object.keys(queues).map((queueName) => ({
    queueName,
    messageCount: queues[queueName].length,
  }));
}