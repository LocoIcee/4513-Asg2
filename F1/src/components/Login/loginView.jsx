const LoginView = (props) => {
    return(
        <div>
            <form>
                <h2>
                    Login
                </h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="pass">Password</label>
                <input type="passord" id="pass"/>
                <button onClick={() => props.doLogin()}>
                    Login
                </button>
                <button onClick={() => props.doLogin()}>
                    Register
                </button>
            </form>
        </div>
    )
}
export default LoginView;
