import ConstructorsList from '../Constructors/constructorsList';
import DriversList from '../Drivers/driversList';


const StandingsView = (props) => {
    return(
        <div>
            <h2>
                Standings
            </h2>
            <h1>
                After Round #
            </h1>
            <DriversList/>
            <ConstructorsList/>
        </div>
    )
}
export default StandingsView;