import { useState, useEffect } from 'react';
import ResultsTableItem from './resultsTableItem';

const ResultsTable = (props) => {

    const [results, fillResults] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/results/${props.raceId}`;
            console.log("fetching results");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { fillResults(data);})
            .catch(error => {
                console.error('Error fetching results:', error);
            }); 
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
                <table>
                    <thead>
                        <tr>
                            <td>Pos</td>
                            <td></td>
                            <td></td>
                            <td>Laps</td>
                            <td>Pts</td>

                        </tr>
                    </thead>
                    <tbody>
                        {results.sort((a,b) => a.position - b.position).map( (r,indx) => <ResultsTableItem
                                result={r} key={indx}/>)}
                    </tbody>
                </table>
            ):(
                <></>
            )}
        </div>
    )
}
export default ResultsTable;
