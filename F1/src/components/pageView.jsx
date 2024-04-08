import CircuitView from './Circuit/circuitView';
import ConstructorView from './Constructors/constructorView';
import DriverView from './Drivers/driverView';
import FavoritesView from './Favorites/favoritesView';
import Header from './Header/header';
import LoginView from './Login/loginView';
import RacesView from './Races/racesView';
import ResultsView from './Results/resultsView';
import StandingsView from './Standings/standingsView'
import { useEffect, useState } from 'react';

const PageView = (props) => {

    const [login, setLogin] = useState(false);

    const loginSuccess = () => {
        setLogin(true);
    }

    const [races, fillRaces] = useState(null);
    const [viewRaces, showRaces] = useState(false);

    useEffect(() => {
        if (races != null){
            showRaces(true);
        }

    }, [races])

    return (
        <div>
            <h2> 
                Application Name
            </h2>
            {login ? (
                <div>
                    <Header seasonData={fillRaces}/>
                    {viewRaces ? (
                        <RacesView racesData={races}/>
                    ):(
                        <></>
                    )}
                    <ResultsView/>
                    <StandingsView/>
                    <CircuitView/>
                    <DriverView/>
                    <ConstructorView/>
                    <FavoritesView/>
                </div>
                
            ) : (
                <LoginView doLogin={loginSuccess}/>
            )}
            
        </div>
    )
}
export default PageView;