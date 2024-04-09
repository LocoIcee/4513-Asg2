import { useEffect, useState } from 'react';

const CircuitView = (props) => {

    const [circuit, fillCircuit] = useState(null);

    useEffect(() => {
        if (props.circuitRef != null){
            const url = `https://four513-asg1.onrender.com/api/circuits/${props.circuitRef}`;
            console.log("fetching circuit");
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
                props.fillCircuit(data);})
            .catch(error => {
                
                 console.error('Error fetching circuit:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Circuit data not found');
                 }
            }); 
        }
    }, [props.circuitRef]);

    return(
        <>
            {circuit != null ? (
                <div>
                    <h2>
                        Circuit Details
                    </h2>
                    <h3>
                        {circuit.name}, {circuit.location}, {circuit.country}, {circuit.url}
                    </h3>
                    <button>
                        close
                    </button>
                    <button>
                        Add Favorites
                    </button>
                    <img src="cirtuit image"/>
                    /* Map leaflet react compontent*/
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default CircuitView;