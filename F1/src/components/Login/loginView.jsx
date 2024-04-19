const LoginView = (props) => {
    return(
        <div> 
                <div className="card w-96 bg-base-100 shadow-xl bg-opacity-85">
                    <div className="card-body">
                        <form>
                            <h2 class="flex justify-center font-mono font-bold text-2xl">
                                Login
                            </h2>
                            <label htmlFor="email" class="block mb-2">Email</label>
                            <input class=" w-80 h-11 px-2" type="email" id="email"/>
                            <label htmlFor="pass" class="block mb-2">Password</label>
                            <input class=" w-80 h-11 px-2" type="passord" id="pass"/>
                            <div className="text-center">
                                <button class="btn btn-lg bg-white w-80 my-4" onClick={() => props.doLogin()}>
                                    Login
                                </button>
                                <button class="btn btn-lg bg-white w-80" onClick={() => props.doLogin()}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
    )
}
export default LoginView;
