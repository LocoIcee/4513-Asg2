const ResultsTableItem = (props) => {
    return (
        <tr class="odd:bg-white even:bg-slate-50">
            <td>
                {props.result.position}
            </td>
            <td>
                <a onClick={() => props.fillDriverRef(props.result.drivers.driverRef)}>{props.result.drivers.forename} {props.result.drivers.surname}</a>
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
