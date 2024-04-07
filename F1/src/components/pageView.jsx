import CircuitView from './Circuit/circuitView';
import ConstructorView from './Constructors/constructorView';
import DriverView from './Drivers/driverView';
import FavoritesView from './Favorites/favoritesView';
import Header from './Header/header';
import RacesView from './Races/racesView';
import ResultsView from './Results/resultsView';
import StandingsView from './Standings/standingsView';

const PageView = (props) => {
    return (
        <div>
            <Header/>
            <RacesView/>
            <ResultsView/>
            <StandingsView/>
            <CircuitView/>
            <DriverView/>
            <ConstructorView/>
            <FavoritesView/>
        </div>
    )
}
export default PageView;