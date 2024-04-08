import RacesList from './racesList'

const RacesView = (props) => {
    return (
        <div>
            <h2>{props.racesData[0].year} Races</h2>
            <RacesList racesData={props.racesData} getSingleRace={props.getSingleRace}/>
        </div>
    )
}

export default RacesView;