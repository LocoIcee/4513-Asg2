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
                    <button>
                        close
                    </button>
                    <button>
                        Add Favorites
                    </button>
                    <img src="driver image"/>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default DriverView;
