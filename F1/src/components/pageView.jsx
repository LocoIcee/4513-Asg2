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

    const [singleRace, getSingleRace] = useState(null);
    const [viewResults, showResults] = useState(false);
    const [viewStandings, showStandings] = useState(false);



    return (
        <div>
            <h2> 
                Application Name
            </h2>
            {login ? (
                <div>
                    <Header seasonData={fillRaces}/>
                    {viewRaces ? (
                        <div>
                            <RacesView racesData={races} getSingleRace={getSingleRace}
                            showResults={showResults} showStandings={showStandings}/>
                            {viewResults ? (
                                <ResultsView race={singleRace}/>
                            ): viewStandings ? (
                                <StandingsView race={singleRace}/>
                            ): (
                                <></>
                            )}
                        </div>
                    ):(
                        <></>
                    )}
                    
                    
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