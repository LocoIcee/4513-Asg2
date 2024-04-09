import RacesTableItem from './racesTableItem'

const RacesTable = (props) => {
    return (
        <div>
            <table class="text-left bg-gray-700">
                <thead>
                    <tr>
                        <th>Rnd</th>
                        <th>Circuit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.racesData.map( (r,indx) => <RacesTableItem
                    race={r} key={indx} getSingleRace={props.getSingleRace} 
                    showResults={props.showResults} showStandings={props.showStandings}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default RacesTable;