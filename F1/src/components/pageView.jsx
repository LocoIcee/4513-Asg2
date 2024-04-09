import { useEffect, useState } from 'react';
import CircuitView from './Circuit/circuitView';
import ConstructorView from './Constructors/constructorView';
import DriverView from './Drivers/driverView';
import FavoritesView from './Favorites/favoritesView';
import Header from './Header/header';
import LoginView from './Login/loginView';
import RacesView from './Races/racesView';
import ResultsView from './Results/resultsView';
import StandingsView from './Standings/standingsView'


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
        <div class=" bg-[url('assets/LoginBack1.jpg')] bg-no-repeat bg-cover h-screen ">
            <h2 class="text-stone-50 font-bold font-mont text-2xl"> 
                F1 Stats
            </h2>
            {login ? (
                <div class="bg-slate-50 h-dvh">
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