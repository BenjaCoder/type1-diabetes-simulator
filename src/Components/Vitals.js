import Indicator from "./Indicator"

export default function Vitals(props) {
    
    const indicators = props.vitals.map((vital, i) => 
        <Indicator
            key={vital.id}
            id={vital.id}
            className={`indic${i+1}`}
            name={vital.name}
            value={vital.value}
            handleClick={props.handleClick}
        />
    )
    return (
        <div className="vitals">
            {indicators}
        </div>
    )
}