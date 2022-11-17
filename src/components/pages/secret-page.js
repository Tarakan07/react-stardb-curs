import React from "react";
import { Redirect } from "react-router-dom";
const SecretPage=({isLoggedIn})=>{
    if(isLoggedIn){
        return(
            <p>You're see secret Page!!!</p>
        )
    }
    return(
        <Redirect to="/login"/>
    )
}

export default SecretPage;