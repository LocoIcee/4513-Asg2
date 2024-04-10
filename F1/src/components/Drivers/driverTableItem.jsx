const DriversTableItem = (props) => {
    return (
        <tr class="odd:bg-white even:bg-slate-50">
            <td>
                {props.driver.position}
            </td>
            <td>
                <a class="text-blue-700 hover:underline" onClick={() => props.fillDriverRef(props.driver.drivers.driverRef)}>{props.driver.drivers.forename} {props.driver.drivers.surname}</a>
            </td>
            <td>
                {props.driver.points}
            </td>
            <td>
                {props.driver.wins}
            </td>
        </tr>
    )
}
export default DriversTableItem;