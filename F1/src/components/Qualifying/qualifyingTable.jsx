import { useState, useEffect } from 'react';
import QualifyingTableItem from './qualifyingTableItem';

const QualifyingTable = (props) => {

    const [qualifying, fillQualify] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/qualifying/${props.raceId}`;
            console.log("fetching qualifying");
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
                props.fillQualify(data);})
            .catch(error => {
                
                 console.error('Error fetching season:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Season data not found');
                 }
            });
        }
    }, [props.raceId]);

    return (
        <div>
            <h2>
                Qualifying
            </h2>
            {qualifying != null ? (
                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th></th>
                            <th></th>
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifying.sort((a,b) => a.position - b.position).map( (q,indx) => <QualifyingTableItem
                        qualify={q} key={indx}/>)}
                    </tbody>
                </table>
            ) : (
                <></>
            )}
        </div>
    )
}
export default QualifyingTable;
