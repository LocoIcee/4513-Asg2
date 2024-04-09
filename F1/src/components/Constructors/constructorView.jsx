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
                    <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                        close
                    </button>
                    <button class="rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                        Add Favorites
                    </button>
                    <img src="/assets/600x600.png"/>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default ConstructorView;
