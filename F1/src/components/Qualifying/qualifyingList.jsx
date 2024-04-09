import { useState, useEffect } from 'react';
import QualifyingListItem from './qualifyingListItem';

const QualifyingList = (props) => {

    const [qualifying, fillQualify] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/qualifying/${props.raceId}`;
            console.log("fetching qualifying");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { fillQualify(data);}) 
        }
    }, [props.raceId]);

    return (
        <div>
            <h2>
                Qualifying
            </h2>
            {qualifying != null ? (
                <ol>
                    {qualifying.sort((a,b) => a.position - b.position).map( (q,indx) => <QualifyingListItem
                    qualify={q} key={indx}/>)}
                </ol>
            ) : (
                <></>
            )}
        </div>
    )
}
export default QualifyingList;
