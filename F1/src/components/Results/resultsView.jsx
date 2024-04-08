import ResultsList from './resultsList';
import QualifyingList from '../Qualifying/qualifyingList';
import { useState, useEffect } from 'react';
import res from 'express/lib/response';



const ResultsView = (props) =>{

    const [results, getResults] = useState(null);

    useEffect(() => {
        if (props.race != null){
            const url = `https://four513-asg1.onrender.com/api/results/${props.race.raceId}`;
            console.log("fetching results");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { getResults(data);}) 
        }
    }, [props.race]);

    return (
        <div>
            <h2>
                Results
            </h2>
            <h3>
                {props.race.name}, Round #{props.race.round}, {props.race.year}, {props.race.date}, {props.race.url}
            </h3>
            <QualifyingList raceId={props.race.raceId}/>
            <ResultsList/>
        </div>
    )
}
export default ResultsView;
