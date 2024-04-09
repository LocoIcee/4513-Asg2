const LoginView = (props) => {
    return(
        <div> 
                <div class=" bg-slate-100 border-4 border-spacing-x-52 border-black size-96 mx-auto my-72 px-7 py-4">
                    <form>
                        <h2 class="flex justify-center font-mono font-bold text-2xl">
                            Login
                        </h2>
                        <label htmlFor="email" class="block mb-2">Email</label>
                        <input class=" w-80 h-11 px-2" type="email" id="email"/>
                        <label htmlFor="pass" class="block mb-2">Password</label>
                        <input class=" w-80 h-11 px-2" type="passord" id="pass"/>
                        <button class=" mt-4 block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500 w-80 h-11" onClick={() => props.doLogin()}>
                            Login
                        </button>
                        <button class="mt-4 block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500 w-80 h-11" onClick={() => props.doLogin()}>
                            Register
                        </button>
                    </form>
                    <footer class=" text-xs font-bold sticky top-[100vh]  px-0 py-8">hero image from unsketch.com</footer>
                </div>
            </div>   
    )
}
export default LoginView;
