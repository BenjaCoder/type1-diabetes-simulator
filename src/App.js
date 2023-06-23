import './App.css';
import Graph from './Components/Graph';
import Vitals from './Components/Vitals';
import Actions from "./Components/Actions"

function App() {
	return (
		<div>
			<div>
				<Graph />
				<Vitals />
			</div>
			<div>
				<Actions />
			</div>
		</div>
	)
}

export default App;
