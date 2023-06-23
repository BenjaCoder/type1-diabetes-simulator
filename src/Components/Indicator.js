
export default function Indicator(props) {

    return (
        <div className={`${props.className} indicator`}>
            <h3 className="indicator-name">{props.name}</h3>
            <h2
                className={`indicator-value ${Number(props.value) < 40 && "red-text"}`}
            >
                {props.value}
            </h2>
        </div>
    )
}