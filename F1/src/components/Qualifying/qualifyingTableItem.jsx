const QualifyingTableItem = (props) => {
    return (
        <tr class="odd:bg-white even:bg-slate-50">
            <td>
                {props.qualify.position}
            </td>
            <td>
                <a class="text-blue-700 hover:underline" onClick={() => props.fillDriverRef(props.qualify.drivers.driverRef)}>{props.qualify.drivers.forename} {props.qualify.drivers.surname}</a>
            </td>
            <td>
                <a class="text-blue-700 hover:underline" onClick={() => props.fillConstructorRef(props.qualify.constructors.constructorRef)}>{props.qualify.constructors.name}</a>
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
