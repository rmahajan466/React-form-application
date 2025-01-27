import { useState } from 'react';
import './Form.css';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';


function Form(){

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleValidatePassword = () => {
        const password = formValues.password;
        if(!validatePassword(password)){
            console.log("Password invalid");
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
        if(!validateEmail(email)){
            console.log("Invalid email");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidatePassword();
        handleValidateEmail();
        console.log(formValues);
    }

    return(
        <div>
            New Form
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input
                        type="text"
                        value={formValues.email}
                        onChange={(event) => setFormValues({...formValues, email: event.target.value})}
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <input
                        type="password"
                        value={formValues.password}
                        onChange={(event) => setFormValues({...formValues, password: event.target.value})}
                    />
                </div>

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default Form;