import { useState, useEffect } from 'react';
import ResultsTableItem from './resultsTableItem';

const ResultsTable = (props) => {

    const [results, fillResults] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/results/${props.raceId}`;
            console.log("fetching results");
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
                fillResults(data);})
            .catch(error => {
                
                 console.error('Error fetching results:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Results data not found');
                 }
            });
        }
    }, [props.raceId]);

    return (
        <div>
            <h2>
                Results
            </h2>
            <img src="./src/assets/250x250.png"/>

            <img src="./src/assets/250x250.png"/>
                
            <img src="./src/assets/250x250.png"/>
            {results != null ?(
                <table>
                    <thead class="text-left bg-slate-50">
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
