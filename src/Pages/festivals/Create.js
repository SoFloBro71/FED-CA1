import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Create = () => {

    const errorStyle = {
        color: 'red'
    };

    const [errors, setErrors] = useState();

    const Navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        city: "",
        start_date: "",
        end_date: "",

    })


    const handleForm = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const isRequired = (fields) => {

        let included = true;
        setErrors({});

        fields.forEach(field => {
            
            if(!form[field]){

                included = false;
                setErrors(prevState => ({
                    ...prevState,
                    [field]:{
                        message: `${field} is required!`
                    }
                }))
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Submitted', form);

        if(isRequired(['title','description', 'city', 'start_date', 'end_date'])){


            let token = localStorage.getItem('token');

            axios.post('https://festivals-api.vercel.app/api/festivals', form, {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                Navigate('/festivals');
            })
    
            .catch(err => {
                console.log(err);
            })
        }

    }

    return(
        <>
            <h3>Create Festival</h3>
            <form onSubmit={submitForm}>
                {/* TITLE */}
                <div>
                Title: <input type='text' onChange={handleForm} value={form.title} name='title'/> <span style={errorStyle}>{errors.title?.message}</span> 
                </div>
                <hr/>
                {/* DESCRIPTION */}
                <div>
                Description: <input type='text' onChange={handleForm} value={form.description} name='description'/> <span style={errorStyle}>{errors.title?.message}</span> 
                </div>
                <hr/>
                {/* CITY */}
                <div>
                City: <input type='text' onChange={handleForm} value={form.city} name='city'/> <span style={errorStyle}>{errors.title?.message}</span> 
                </div>
                <hr/>
                {/* START DATE */}
                <div>
                Start_Date: <input type='datetime-local' onChange={handleForm} value={form.start_date} name='start_date'/> <span style={errorStyle}>{errors.title?.message}</span> 
                </div>
                <hr/>
                {/* END DATE */}
                <div>
                End_Date: <input type='datetime-local' onChange={handleForm} value={form.end_date} name='end_date'/> <span style={errorStyle}>{errors.title?.message}</span> 
                </div>
                <hr/>

                <input type='submit' />

            </form>
        </>
    )
}

export default Create;