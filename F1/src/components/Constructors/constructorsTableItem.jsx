const ConstructorsTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.constructor.position}
            </td>
            <td>
                {props.constructor.constructors.name}
            </td>
            <td>
                {props.constructor.points}
            </td>
            <td>
                {props.constructor.wins}
            </td>
        </tr>
    )
}
export default ConstructorsTableItem;
