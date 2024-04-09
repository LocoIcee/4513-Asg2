import { useState, useEffect } from 'react';
import ResultsTable from './resultsTable';
import QualifyingTable from '../Qualifying/qualifyingTable';
import CircuitView from '../Circuit/circuitView';




const ResultsView = (props) =>{

    const [circuit, fillCircuit] = useState(null);
    const [viewCircuit, triggerCircuit] = useState(false);

    useEffect(() => {
        if (props.race.circuitId != null){
            const url = `https://four513-asg1.onrender.com/api/circuits/${props.race.circuitId}`;
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
                fillCircuit(data);})
            .catch(error => {
                
                 console.error('Error fetching circuit:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Circuit data not found');
                 }
            }); 
        }
    }, [props.race.circuitId]);

    return (
        <div>
            <h2>
                Results
            </h2>
            <h3>
                {props.race.name}, Round #{props.race.round}, {props.race.year}, <a href={() => triggerCircuit(true)}>{circuit.name}</a>, {props.race.date}, {props.race.url}
            </h3>
            <QualifyingTable raceId={props.race.raceId}/>
            <ResultsTable raceId={props.race.raceId}/>
            <CircuitView viewCircuit={viewCircuit} triggerCircuit={triggerCircuit}/>
        </div>

    )
}
export default ResultsView;
