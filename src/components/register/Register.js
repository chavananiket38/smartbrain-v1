import React, {useState} from "react";

const Register = ({ onRouteChange, loadUser }) => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = () => {
        if(!Name || !Email || !Password){
            const text = document.getElementById('textError');
            text.textContent = "All fields are required";
        }else{
            fetch(" https://nameless-citadel-65461.herokuapp.com/register", {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                    password: Password
                })
            })
            .then(res => res.json())
            .then(user => {
                if(user.id){
                    loadUser(user);
                    onRouteChange('signin');
                }else{
                    const text = document.getElementById('textError');
                    text.textContent = "Invalid input or email already used ";
                }
            })
            .catch(err => {
                const text = document.getElementById('textError');
                text.textContent = "Invalid input or already used email";
            })
        }
    }

    return(
        <article className="br3 ba mv4 w-100 w-50-m w-25-l mw5 shadow-5 center" style={{marginTop: "70px"}} >
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div id="textError" style={{color: "white"}}> </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                        type="name" 
                        name="name"  
                        id="name"
                        onChange={onNameChange}
                        />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={onEmailChange}
                        />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={onPasswordChange}
                        />
                    </div>

                    </fieldset>
                    <div className="">
                    <input 
                        onClick={onSubmit}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                        style={{marginTop: "10px", marginBottom: "10px"}}
                    />
                    </div>
                    <div className="lh-copy">
                    <a 
                    style={{ textDecorationLine: "underline",
                    textDecorationStyle: "double"}}
                    onClick={() => onRouteChange('signin')} href="#0" 
                    className="f5 link dim black db"
                    >Back
                    </a>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default Register;