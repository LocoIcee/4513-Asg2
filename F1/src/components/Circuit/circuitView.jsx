const CircuitView = (props) => {

    return(
        <>
            {props.viewCircuit ? (
                    <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
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
                            <img src="~/assets/600x600.png"/>
                            /* Map leaflet react compontent*/
                        </div>
                    </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default CircuitView;