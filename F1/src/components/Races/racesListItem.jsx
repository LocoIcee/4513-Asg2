const RacesListItem = (props) => {
    return (
        <li>
            <p>{props.race.name}</p>
            <button onClick={() => props.getSingleRace(props.race)}>Results</button>
            <button onClick={() => props.getSingleRace(null)}>Standings</button>
        </li>
    )
}

export default RacesListItem;