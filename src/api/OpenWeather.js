import React, { useState } from 'react';

export default () =>{
    const [result, setResult] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const FetchWeather = async (myCity) => {
        try{
            let response = await fetch(
                'https://api.openweathermap.org/data/2.5/weather?q='+myCity+'&units=metric&appid=7de7313c646f15c056b5daaeda647efa')
            let jsonResponse = await response.json()
            if(!jsonResponse.message){
                setResult(jsonResponse.main);
            }
            else{
                setErrorMessage(jsonResponse.message)
            }
        }
        catch(err){
            console.log("Error")
            setErrorMessage('Something Went Wrong!');
        }
    };
    return [FetchWeather, result, errorMessage];
};
