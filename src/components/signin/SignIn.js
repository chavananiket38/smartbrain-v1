import React, {useState} from "react";

const SignIn = ({ onRouteChange, loadUser }) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = () => {
        fetch(" https://nameless-citadel-65461.herokuapp.com/signin", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: Email,
                password: Password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(!Email || !Password){
                const text = document.getElementById('textError');
                text.textContent = "All fields are required";
            }else if(user.id){
                loadUser(user);
                onRouteChange('home');
            }
            else{
                const text = document.getElementById('textError');
                text.textContent = "User Not Found or wrong credentials";
            }
        })
        .catch(err => {
            const text = document.getElementById('textError');
            text.textContent = "User Not Found";
        })
    }

    return(
        <article className="br3 ba mv4 w-100 w-50-m w-25-l mw5 shadow-5 center" style={{marginTop: "70px"}}>
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <div id="textError" style={{color: "white"}}> </div>
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
                        value="Sign in"
                        style={{marginTop: "10px", marginBottom: "10px"}}
                    />
                    </div>
                    <div className="lh-copy mt3 ">
                    <a 
                    style={{ textDecorationLine: "underline",
                    textDecorationStyle: "double"}}
                    onClick={() => onRouteChange('register')} href="#0" 
                    className="f5 link dim black db"
                    >Register
                    </a>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default SignIn;





// import React, {useState} from "react";

// const SignIn = ({ onRouteChange }) => {

//     const[email, setEmail] = useState("");
//     const[Password, setPassword] = useState("");

//     onNameChange = (event) => {
//         setEmail(event.target.value);
//     }

//     onPasswordChange = (event) => {
//         setPassword(event.target.value);
//     }

//     return(
//         <article className="br3 ba mv4 w-100 w-50-m w-25-l mw5 shadow-5 center" style={{marginTop: "70px"}}>
//             <main className="pa4 black-80">
//                 <form className="measure ">
//                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                     <legend className="f4 fw6 ph0 mh0">Sign In</legend>
//                     <div className="mt3">
//                         <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
//                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
//                     </div>
//                     <div className="mv3">
//                         <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
//                         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
//                     </div>
//                     </fieldset>
//                     <div className="">
//                     <input 
//                         onClick={() => onRouteChange('home')}
//                         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
//                         type="submit" 
//                         value="Sign in"
//                         style={{marginTop: "10px", marginBottom: "10px"}}
//                     />
//                     </div>
//                     <div className="lh-copy mt3 ">
//                     <a 
//                         style={{ textDecorationLine: "underline",
//                             textDecorationStyle: "double"}}
//                         onClick={() => onRouteChange('register')} href="#0" 
//                         className="f5 link dim black db"
//                     >Register
//                     </a>
//                     </div>
//                 </form>
//             </main>
//         </article>
//     );
// }

// export default SignIn;