import ConstructorsTable from '../Constructors/constructorsTable';
import DriversTable from '../Drivers/driversTable';


const StandingsView = (props) => {
    return(
        <div>
            <h2>
                Standings
            </h2>
            <h3>
                After Round {props.race.round}
            </h3>
            <DriversTable raceId={props.race.raceId}/>
            <ConstructorsTable raceId={props.race.raceId}/>
        </div>
    )
}
export default StandingsView;