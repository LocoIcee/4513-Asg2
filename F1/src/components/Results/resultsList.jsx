import { useState, useEffect } from 'react';
import ResultsListItem from './resultsListItem';

const ResultsList = (props) => {

    const [results, fillResults] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/results/${props.raceId}`;
            console.log("fetching results");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { fillResults(data);}) 
        }
    }, [props.raceId]);

    return (
        <div>
            <h2>
                Results
            </h2>
            <img src="image for 1st"/>

            <img src="image for 2nd"/>
                
            <img src="image for 3rd"/>
            {results != null ?(
                <ol>
                    {results.sort((a,b) => a.position - b.position).map( (r,indx) => <ResultsListItem
                            result={r} key={indx}/>)}
                </ol>
            ):(
                <></>
            )}
        </div>
    )
}
export default ResultsList;
