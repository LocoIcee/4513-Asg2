import RacesListItem from './racesListItem'

const RacesList = (props) => {
    return (
        <div>
            <ol>
            {props.racesData.map( (r,indx) => <RacesListItem
            race={r} key={indx}/>)}
            </ol>
        </div>
    )
}

export default RacesList;