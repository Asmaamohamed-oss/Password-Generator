import React from 'react'

export default function PasswordStrenght({password}) {
    const generatePasswordStrenght = () =>{
        if(password.length < 4){
            console.log(password.length);
            return "Very Weak";
        }else if(password.length < 8){
            return "Weak"
        }else if(password.length < 12){
            return "Medium";
        }else if(password.length < 16){
            return "Strong"
        }else{
            return "Very Strong"
        }
    }
    const passwordStrenght = generatePasswordStrenght();
    return (
        <>
            <h6 className="character-length">Stenght:</h6>
            <span style={{ fontSize: "15px" }}>{passwordStrenght}</span>
        </>
    );
}
