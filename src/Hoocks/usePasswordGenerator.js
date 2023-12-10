import React, { useState } from 'react'


export default function usePasswordGenerator() {
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const generatePassword = (checkData,length)=>{
        let characters = ""
        let result = "";
        const selectedCheckData = checkData.filter((check)=> check.state)

        if(selectedCheckData.length === 0){
            setErrorMsg("Select At least one option.");
            setPassword("")
            return ;
        }

        selectedCheckData.forEach(option => {
            switch (option.title) {
                case "Include UpperCase Letters":
                    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include LowerCase Letters":
                        characters += "abcdefghijklmnopqrstuvwxyz";  
                        break;
                case "Include Numbers":
                    characters+= "0123456789"
                    break;
                case "Include Symbols" :
                    characters+= "!@#$%^&*()_+/*"
                    break;
                default :
                break;
            }     
        });
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }
        // console.log(result);
        setPassword(result)
        setErrorMsg('');
    }



    return {password,errorMsg,generatePassword}
}
