import { useEffect, useState } from 'react';

const ConstructorView = (props) => {
    const [constructor, fillConstructor] = useState(null);

    useEffect(() => {
        if (props.ConstructorRef != null){
            const url = `https://four513-asg1.onrender.com/api/drivers/${props.ConstructorRef}`;
            console.log("fetching driver");
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
                fillConstructor(data);})
            .catch(error => {
                
                 console.error('Error fetching constructor:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Constructor data not found');
                 }
            }); 
        }
    }, [props.driverRef]);

    return(
        <>
            {constructor != null ? (
                <div>
                    <h2>
                        Constructor Details
                    </h2>
                    <h3>
                        {constructor.name}, {constructor.nationality}, 
                        {constructor.url}
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
export default ConstructorView;
