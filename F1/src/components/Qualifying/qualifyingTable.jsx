import { useState, useEffect } from 'react';
import QualifyingTableItem from './qualifyingTableItem';

const QualifyingTable = (props) => {

    const [qualifying, fillQualify] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/qualifying/${props.raceId}`;
            console.log("fetching qualifying");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { fillQualify(data);}) 
            .catch(error => {
                console.error('Error fetching qualifying:', error);
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
