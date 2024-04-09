import RacesListItem from './racesListItem'

const RacesList = (props) => {
    return (
        <div>
            <ol>
            {props.racesData.map( (r,indx) => <RacesListItem
            race={r} key={indx} getSingleRace={props.getSingleRace} 
            showResults={props.showResults} showStandings={props.showStandings}/>)}
            </ol>
        </div>
    )
}

export default RacesList;