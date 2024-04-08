const RacesListItem = (props) => {
    return (
        <li>
            <p>{props.race.name}</p>
            <button>Results</button>
            <button>Standings</button>
        </li>
    )
}

export default RacesListItem;