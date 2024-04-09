const LoginView = (props) => {
    return(
        <div> 
                <div class=" bg-slate-100 border-4 border-spacing-x-52 border-black size-96 flex flex-col object-center justify-center  mx-auto px-7 py-4">
                    <form>
                        <h2 class="flex justify-center font-mono font-bold text-2xl">
                            Login
                        </h2>
                        <label htmlFor="email" class="block mb-2">Email</label>
                        <input class=" w-80 h-11 px-16 py-4" type="email" id="email"/>
                        <label htmlFor="pass" class="block mb-2">Password</label>
                        <input class=" w-80 h-11 px-16 py-4" type="passord" id="pass"/>
                        <button class=" mt-4 block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500 w-80 h-11" onClick={() => props.doLogin()}>
                            Login
                        </button>
                        <button class="mt-4 block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500 w-80 h-11" onClick={() => props.doLogin()}>
                            Register
                        </button>
                    </form>
                </div>
                <footer class="left-0 bottom-0 font-bold text-stone-50 h-10 sticky top-[100vh]">unsketch.com</footer>
            </div>   
    )
}
export default LoginView;
