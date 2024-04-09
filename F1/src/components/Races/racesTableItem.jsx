const RacesTableItem = (props) => {
    return (
        <tr>
            <td>
                {props.race.round}
            </td>
            <td>
                {props.race.name}
            </td>
            <td>
                <button onClick={() => (props.getSingleRace(props.race), 
                    props.showResults(true), props.showStandings(false))}>
                        Results
                </button>
            </td>
            <td>
                <button onClick={() => (props.getSingleRace(props.race), 
                    props.showStandings(true), props.showResults(false))}>
                        Standings
                </button>
            </td>
        </tr>
    )
}

export default RacesTableItem;