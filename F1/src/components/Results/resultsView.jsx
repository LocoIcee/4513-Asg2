import { useState, useEffect } from 'react';
import ResultsTable from './resultsTable';
import QualifyingTable from '../Qualifying/qualifyingTable';
import CircuitView from '../Circuit/circuitView';




const ResultsView = (props) =>{

    const [circuit, fillCircuit] = useState(null);
    const [viewCircuit, triggerCircuit] = useState(false);

    useEffect(() => {
        if (props.race != null){
            const url = `https://four513-asg1.onrender.com/api/circuits/season/${props.race.year}`;
            console.log("fetching circuit");
            fetch (url)
            .then( resp => {
                if (resp.status === 404) {
                    throw new Error('404 Not Found');
                }
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then( data => { 
                const cir = data.find( ({circuits}) => circuits.circuitId === props.race.circuitId);
                fillCircuit(cir.circuits)})
            .catch(error => {
                
                 console.error('Error fetching circuit:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Circuit data not found');
                 }
            });
            console.log(circuit);
        }
    }, [props.race]);

    return (
        <>
            {circuit != null ?(
                <div>
                    <h2>
                        Results
                    </h2>
                    <h3>
                        {props.race.name}, Round #{props.race.round}, {props.race.year}, <a onClick={() => triggerCircuit(true)}>{circuit.name}</a>, {props.race.date}, {props.race.url}
                    </h3>
                    <CircuitView circuit={circuit} viewCircuit={viewCircuit} triggerCircuit={triggerCircuit}/>
                    <QualifyingTable raceId={props.race.raceId}/>
                    <ResultsTable raceId={props.race.raceId}/>
                    
                </div>
                ):(
                    <></>
                )}
        </>
    )
}
export default ResultsView;
