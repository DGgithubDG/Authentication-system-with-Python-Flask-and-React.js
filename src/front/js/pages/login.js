import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const navigate = useNavigate();
    const  token = sessionStorage.getItem ("token");

    console.log("this is your token",store.token)
    const handleClick = () => {
        actions.login(email,password);

        if (store.token && store.token != "" && store.token!= undefined) navigate.push("/");

  //  const handleClick = () => {
    //     const opts = {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email:email,
    //             password:password
    //         })
    //     };
       
    //     fetch('https://3001-dggithubdg-authenticati-6wrekncw29y.ws-eu78.gitpod.io/api/token',opts)
    //     .then(resp => {
    //         if(resp.status === 200) return resp.json();
    //         else alert("there was some error");
    //     })
    //     .then(data => {
    //         console.log("blabla" , data);
    //         sessionStorage.setItem("token", data.access_token);
    //     })
    //     .catch(error => {
    //     console.error("error blla",error);
    // });
};
	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
       {store.token && store.token != "" && store.token != undefined ? 
       ("some text about token" + store.token
       ) : 
            <div>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input
                placeholder="pass"
                 type="password"
                  value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleClick}>login</button>
         </div>
       }
		</div>
	);
};
