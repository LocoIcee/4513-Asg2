const ResultsTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.result.position}
            </td>
            <td>
                {props.result.drivers.forename} {props.result.drivers.surname}
            </td>
            <td>
                {props.result.constructors.name}
            </td>
            <td>
                {props.result.laps}
            </td>
            <td>
                {props.result.points}
            </td>
        </tr>
    )
}
export default ResultsTableItem;
