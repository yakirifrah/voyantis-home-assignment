import './App.css';
import Header from './components/Header/Header';
import QueueManagement from './container/QueueManagement/QueueManagement';
function App() {
	return (
		<div className="App">
			<Header />
			<div className="app__container">
				<h1>Queue Manager</h1>
				<QueueManagement />
			</div>
		</div>
	);
}

export default App;
