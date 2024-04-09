import { useEffect, useState } from 'react';

const DriverView = (props) => {
    const [driver, fillDriver] = useState(null);

    useEffect(() => {
        if (props.driverRef != null){
            const url = `https://four513-asg1.onrender.com/api/drivers/${props.driverRef}`;
            console.log("fetching driver");
            fetch (url)
            .then( resp => resp.json() )
            .then( data => { fillDriver(data);})
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
                fillDriver(data);})
            .catch(error => {
                
                 console.error('Error fetching Driver:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Driver data not found');
                 }
            });
        }
    }, [props.driverRef]);

    return(
        <>
            {driver != null ? (
                <div>
                    <h2>
                        Driver Details
                    </h2>
                    <h3>
                        {driver.forename} {driver.surname}, {driver.dob}, 
                        {driver.nationality}, {driver.url}
                    </h3>
                    <button class="mx-2 px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                        close
                    </button>
                    <button class="px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                        Add Favorites
                    </button>
                    <img src="assets/250x250.png"/>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default DriverView;
