import React from 'react';
import Graph from './Components/Graph';
import Vitals from './Components/Vitals';
import Actions from "./Components/Actions"

function App() {

	const [vitals, setVitals] = React.useState([
		{ id: 1, name: "Blood glucose", value: "120" },
        { id: 2, name: "Pain endurance", value: "100" },
        { id: 3, name: "Energy level", value: "100" }
	]);

	function bgDrop() {
		setVitals(oldVitals => oldVitals.map(vital => (
			vital.id === 1
			? {	...vital,
				value: vital.value - 1 > 0
				? `${(String(vital.value-1)).padStart(3, "0")}`
				: "000"
			}
			: vital
		)))
	}

	React.useEffect(() => {
		const x = setInterval(bgDrop, 200)
		return () => { clearInterval(x) }
	})

	const [graphData, setGraphData] = React.useState([])

	return (
		<div className='app-container'>
			<div className='top-container'>
				<Graph />
				<Vitals vitals={vitals} />
			</div>
			<hr />
			<div className='bottom-container'>
				<Actions />
			</div>
		</div>
	)
}

export default App;
