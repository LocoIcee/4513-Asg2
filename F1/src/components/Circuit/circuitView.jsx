const CircuitView = (props) => {

    return(
        <>
            {props.viewCircuit ? (
                    <dialog class="flex flex-col w-12 sm:w-5/6 lg:w-1/2  mx-auto rounded-lg border border-gray-300 shadow-xl">
                        <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                            <h2>
                                Circuit Details
                            </h2>
                            <h3>
                                {props.circuit.name}, {props.circuit.location}, {props.circuit.country}, {props.circuit.url}
                            </h3>
                            <button class="mx-2 px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500" onClick={() => props.triggerCircuit(false)}>
                                close
                            </button>
                            <button class="px-2 rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500">
                                Add Favorites
                            </button>
                            
                        </div>
                        <img class="b-white  w-40 h-40" src="./src/assets/250x250.png"/>
                    </dialog>
            ) : (
                <></>
            )}
        </>
    )
}
export default CircuitView;