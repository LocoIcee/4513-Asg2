const CircuitView = (props) => {

    return(
        <>
            {props.circuit != null & props.viewCircuit ? (
                <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
                    <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                        <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                            <h2>
                                Circuit Details
                            </h2>
                            <h3>
                                {props.circuit.name}, {props.circuit.location}, {props.circuit.country}, {props.circuit.url}
                            </h3>
                            <button onClick={() => props.triggerCircuit(false)}>
                                close
                            </button>
                            <button>
                                Add Favorites
                            </button>
                            <img src="cirtuit image"/>
                            /* Map leaflet react compontent*/
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default CircuitView;