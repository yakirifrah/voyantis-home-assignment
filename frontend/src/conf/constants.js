const endPoint = 'http://localhost:3000/api/v1'

export const apis = {
  GET_QUEUES: `${endPoint}/num_of_messages`,
  GET_MESSAGE: (selectedQueue)=> `${endPoint}/${selectedQueue}?timeout=5000`,
}