const QualifyingListItem = (props) => {
    return (
        <li>
            <p>
                {props.qualify.drivers.forname} {props.qualify.drivers.surname}
            </p>
            <p>
                {props.qualify.constructors.name}
            </p>
            <p>
                {props.qualify.q1}
            </p>
            <p>
                {props.qualify.q2}
            </p>
            <p>
                {props.qualify.q3}
            </p>
        </li>
    )
}
export default QualifyingListItem;
