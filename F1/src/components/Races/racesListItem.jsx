const RacesListItem = (props) => {
    return (
        <li>
            <p>{props.race.name}</p>
            <button onClick={() => (props.getSingleRace(props.race), 
                props.showResults(true), props.showStandings(false))}>
                    Results
            </button>
            <button onClick={() => (props.getSingleRace(props.race), 
                props.showStandings(true), props.showResults(false))}>
                    Standings
            </button>
        </li>
    )
}

export default RacesListItem;