const ConstructorsTableItem = (props) => {
    return (
        <tr class="odd:bg-white even:bg-slate-50">
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
