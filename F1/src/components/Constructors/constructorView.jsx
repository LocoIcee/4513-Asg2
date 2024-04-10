import { useEffect, useState } from 'react';

const ConstructorView = (props) => {
    const [constructor, fillConstructor] = useState(null);

    useEffect(() => {
        if (props.constructorRef != null){
            const url = `https://four513-asg1.onrender.com/api/constructors/${props.constructorRef}`;
            console.log("fetching constructor");
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
                fillConstructor(data[0])})
            .catch(error => {
                
                 console.error('Error fetching constructor:', error);
                 
                 if (error.message === '404 Not Found') {
                     console.log('Constructor data not found');
                 }
            }); 
        }
    }, [props.constructorRef]);

    return(
        <>
            {constructor != null ? (
                <dialog class="top-80 left-30 fixed z-50 flex flex-col w-12 sm:w-5/6 lg:w-1/2 mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"> 
                        <h2>
                            Constructor Details
                        </h2>
                        <h3>
                            {constructor.name}, {constructor.nationality}, 
                            {constructor.url}
                        </h3>
                        <button class="mx-2 px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500"
                            onClick={() => props.fillConstructorRef(null)}>
                            close
                        </button>
                        <button class="px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                            Add Favorites
                        </button>
                    </div>
                    <img class="b-white  w-40 h-40" src="./assets/250x250.png"/>
                </dialog>
            ) : (
                <></>
            )}
        </>
    )
}
export default ConstructorView;
