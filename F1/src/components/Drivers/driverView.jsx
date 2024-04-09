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
            .catch(error => {
                console.error('Error fetching driver:', error);
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
