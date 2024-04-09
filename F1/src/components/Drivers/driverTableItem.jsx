const DriversTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.driver.position}
            </td>
            <td>
                {props.driver.drivers.forename} {props.driver.drivers.surname}
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