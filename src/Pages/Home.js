import LoginFrom from "../Components/LoginForm";

const Home = ({ authenticated, onAuthenticated }) => {
    return(
        <>
            <h3>Home</h3>
            {(!authenticated) ? (
            <LoginFrom authenticated={authenticated} onAuthenticated={onAuthenticated}/>
            ) : ( <p>You are Authenticated</p>)
            }

        </>
    )
}

export default Home;