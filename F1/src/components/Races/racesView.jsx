import RacesTable from './racesList'

const RacesView = (props) => {
    return (
        <div>
            <h2>{props.racesData[0].year} Races</h2>
            <RacesTable racesData={props.racesData} getSingleRace={props.getSingleRace}
            showResults={props.showResults} showStandings={props.showStandings}/>
        </div>
    )
}

export default RacesView;