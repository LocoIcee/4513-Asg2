import { useEffect, useState } from 'react';
import ConstructorsTableItem from './constructorsTableItem';

const ConstructorsTable = (props) => {

    const [constructors, fillConstructors] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/standings/${props.raceId}/constructors`;
            console.log("fetching constructors");
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
                fillConstructors(data);})
            .catch(error => {
                
                 console.error('Error fetching constructors:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Constructor data not found');
                 }
            });
        }
    }, [props.raceId]);

    return (
        <div>
            <h2>
                Constructors
            </h2>
            {constructors != null ? (
                <table>
                    <thead class="text-left bg-slate-50">
                        <tr>
                            <th>Pos</th>
                            <th></th>
                            <th>Pts</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {constructors.sort((a,b) => a.position - b.position).map( (c,indx) => <ConstructorsTableItem
                        constructor={c} key={indx}/>)}
                    </tbody>
                </table>
            ) : (
                <></>
            )}
        </div>
    )
}
export default ConstructorsTable;
