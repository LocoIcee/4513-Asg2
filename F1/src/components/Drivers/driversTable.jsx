import { useEffect, useState } from 'react';
import DriversTableItem from './driverTableItem';
import DriverView from '../Drivers/driverView';

const DriversTable = (props) => {

    const [drivers, fillDrivers] = useState(null);

    useEffect(() => {
        if (props.raceId != null){
            const url = `https://four513-asg1.onrender.com/api/standings/${props.raceId}/drivers`;
            console.log("fetching drivers");
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
                fillDrivers(data);})
            .catch(error => {
                
                 console.error('Error fetching drivers:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Drivers data not found');
                 }
            });
        }
    }, [props.raceId]);
    const [driverRef, fillDriverRef] = useState(null);

    return (
        <>
            <div>
                <h2>
                    Drivers
                </h2>
                {drivers != null ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th></th>
                                <th>Pts</th>
                                <th>Wins</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drivers.sort((a,b) => a.position - b.position).map( (d,indx) => <DriversTableItem
                            driver={d} key={indx} fillDriverRef={fillDriverRef}/>)}
                        </tbody>
                    </table>
                ) : (
                    <></>
                )}
            </div>
            {driverRef != null ?(
                <DriverView driverRef={driverRef} fillDriverRef={fillDriverRef}/>
            ) : (
                <></>
            )}
        </>
    )
}
export default DriversTable;