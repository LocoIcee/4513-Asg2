import ConstructorsList from '../Constructors/constructorsList';
import DriversList from '../Drivers/driversList';


const StandingsView = (props) => {
    return(
        <div>
            <h2>
                Standings
            </h2>
            <h3>
                After Round #
            </h3>
            <DriversList/>
            <ConstructorsList/>
        </div>
    )
}
export default StandingsView;