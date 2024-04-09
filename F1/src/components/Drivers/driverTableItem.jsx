const DriversTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.driver.position}
            </td>
            <td>
                <a onClick={() => props.fillDriverRef(props.driver.drivers.driverRef)}>{props.driver.drivers.forename} {props.driver.drivers.surname}</a>
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