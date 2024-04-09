const ResultsListItem = (props) => {
    return (
        <li>
            <p>
                {props.result.drivers.forname} {props.result.drivers.surname}
            </p>
            <p>
                {props.result.constructors.name}
            </p>
            <p>
                {props.result.laps}
            </p>
            <p>
                {props.result.points}
            </p>
        </li>
    )
}
export default ResultsListItem;
