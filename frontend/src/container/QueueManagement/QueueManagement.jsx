import { useState, useEffect } from 'react';
import axios from 'axios';
import { apis } from '../../conf/constants';
import './QueueManagement.css';

function QueueManagement() {
	const [queues, setQueues] = useState([]);
	const [selectedQueue, setSelectedQueue] = useState('');
	const [message, setMessage] = useState(null);

	useEffect(() => {
		fetchQueues();
	}, []);

	const fetchQueues = async () => {
		try {
			const response = await axios.get(apis.GET_QUEUES);
			setQueues(response.data);
		} catch (error) {
			console.error('Error fetching queues:', error);
		}
	};

	const handleQueueSelect = (queueName) => {
		setSelectedQueue(queueName);
	};

	const fetchMessage = async () => {
		if (!selectedQueue) return;

		try {
			const response = await axios.get(apis.GET_MESSAGE(selectedQueue));
			setMessage(response.data || 'No message available');
		} catch (error) {
			console.error('Error fetching message:', error.message);
			setMessage('Error fetching message');
		}
	};

	return (
		<div className="QueueManagement__container">
			<div className="QueueManagement__flex">
				<div className="QueueManagement__col">
					<h3>Queues</h3>
					<div className="QueueManagement__list">
						{queues.map((queue, index) => (
							<div className="QueueManagement__list-item" key={index}>
								{queue.queueName} - {queue.messageCount} messages
								<button
									className="QueueManagement__list-item-btn"
									onClick={() => handleQueueSelect(queue.queueName)}
									style={{ backgroundColor: '#003246' }}
								>
									Select
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="QueueManagement__col-4">
					{selectedQueue && (
						<div className="message-container">
							<h4>Selected Queue: {selectedQueue}</h4>
							<button
								className="QueueManagement__list-item-btn"
								onClick={fetchMessage}
								style={{ backgroundColor: '#003246' }}
							>
								Go
							</button>
							{message && (
								<div className="message">
									<pre>{JSON.stringify(message, null, 2)}</pre>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default QueueManagement;
