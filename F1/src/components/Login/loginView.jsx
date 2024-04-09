const LoginView = (props) => {
    return(
        <div>
            <div class=" bg-[url('assets/LoginBack1.jpg')] bg-no-repeat bg-cover flex flex-row min-h-screen justify-center items-center">
                <div class=" bg-slate-100 border-4 border-spacing-x-52 border-black size-96">
                    <form>
                        <h2 class="flex justify-center font-mono font-bold text-2xl">
                            Login
                        </h2>
                        <label htmlFor="email" class="block mb-2">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="pass" class="block mb-2">Password</label>
                        <input type="passord" id="pass"/>
                        <button class="block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500" onClick={() => props.doLogin()}>
                            Login
                        </button>
                        <button class="block rounded-none border-black border-2 bg-slate-50 hover:bg-slate-500" onClick={() => props.doLogin()}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <div class="flex justify-center">unsplash.com</div>
        </div>
    )
}
export default LoginView;
