import axios from "axios";
import { useState } from "react";

const LoginForm = ({ authenticated, onAuthenticated }) => {

    const errorStyle = {
        color: 'red'
    };

    const [form, setForm] = useState({
        email: "n00211013@iadt.ie",
        password: "Spoopie",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleClick = () => {
        console.log("clicked", form)

        axios.post(`https://festivals-api.vercel.app/api/users/login`, {
            email: form.email, 
            password: form.password,
        })

        .then(response => {
            console.log(response.data);
            onAuthenticated(true, response.data.token);

        })
        .catch(err => {
            console.error(err);
            console.log(err.response.data.message);
            setErrorMessage(err.response.data.message)
        })
    };

    const handleForm = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <>
        Email: <input onChange={handleForm} type="text" name="email" value={form.email} /> <br/>
        Password: <input onChange={handleForm} type="password" name="password" value={form.password}/> <br/>

        <button onClick={handleClick} >Log In</button>
        <p style={errorStyle}>{errorMessage}</p>
        </>
    );
};

export default LoginForm;