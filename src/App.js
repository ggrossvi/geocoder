import { useState, useEffect } from 'react';
import axios from 'axios';
import {KEY} from './secrets.js';
import { getDefaultNormalizer } from '@testing-library/dom';


function App() {
  const baseURL = "https://us1.locationiq.com/v1/search.php?key="

  // const axios = require('axios');
  //Change api url
  // const [location, setLocation] = useState({latitude: "0.0", longitude: ""});
  const [location, setLocation] = useState();
  const getData=()=>{
    // axios.get(`${baseURL}${KEY}&q=${location}&format=json`)
    axios.get(`${baseURL}${KEY}&q=seattle&format=json`)
    //if sucessful then happens
      .then((response) => {
        // console.log(response.data)
        // console.log(response.data[0]['lon'])
        setLocation({latitude: response.data[0]['lat'], longitude: response.data[0]['lon']})
        // setLocation(response.data)
        console.log(location)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    getData(); 
  
  }, []);



  return (
    <div className="App">
      <h1>Get Latitude and Longitude </h1>
      <div>
        {/* {errorMessage} */}
      </div>
      <h1>Results for</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
     {/* {location.map}  */}
    </div>
  );
}

export default App;
