const QualifyingTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.qualify.position}
            </td>
            <td>
                {props.qualify.drivers.forename} {props.qualify.drivers.surname}
            </td>
            <td>
                {props.qualify.constructors.name}
            </td>
            <td>
                {props.qualify.q1}
            </td>
            <td>
                {props.qualify.q2}
            </td>
            <td>
                {props.qualify.q3}
            </td>
        </tr>
    )
}
export default QualifyingTableItem;
