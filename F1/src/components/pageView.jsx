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
        <>
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

                    <FavoritesView/>
                </div>
                
            ) : (
                <div style={{backgroundImage: 'url(/assets/LoginBack.jpg)'}} className="hero min-h-screen">
                    <div>
                        <h2 className="text-5xl font-bold text-center text-white my-4"> 
                            F1 Stats
                        </h2>
                        <LoginView doLogin={loginSuccess}/>
                    </div>
                    <footer className=" text-xs font-bold sticky top-[100vh]  px-0 py-8">Vecteezy.com</footer>
                </div>
            )}
        </>
    )
}
export default PageView;