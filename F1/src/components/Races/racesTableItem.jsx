const RacesTableItem = (props) => {
    return (
        <tr class="odd:bg-white even:bg-gray-700">
            <td>
                {props.race.round}
            </td>
            <td>
                {props.race.name}
            </td>
            <td>
                <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500" onClick={() => (props.getSingleRace(props.race), 
                    props.showResults(true), props.showStandings(false))}>
                        Results
                </button>
            </td>
            <td>
                <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500" onClick={() => (props.getSingleRace(props.race), 
                    props.showStandings(true), props.showResults(false))}>
                        Standings
                </button>
            </td>
        </tr>
    )
}

export default RacesTableItem;