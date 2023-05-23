import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Currency from './Currency';

function Home() {

  
    
    const [StartDate, setStartDate]  = useState('');
    const [EndDate, SetEndDate] = useState('');
    const [Budget, SetBudget] = useState('10000');
    const [Location, SetLocation] = useState('Any');
    console.log(Location)
    console.log(Budget)

    


    // Parameters for Trips
    



    const handleClick = (name) => {
        console.log("You added a " + name)

    }

    const handleChangeSetDate = (Event) => {
        setStartDate(Event.target.value)
    }

    const handleChangeLocation = (Event) => {
        SetLocation(Event.target.value);
        console.log(Location);
    }

    const handleChangeEndDate = (Event) => {
        SetEndDate(Event.target.value)
    }

    const handleChangeBudget = (Event) => {
        SetBudget(Event.target.value)
        console.log(Budget);
    }




  return (
    <div>
        <p>Enter Start Date:</p>
        <input type='date' placeholder='Enter Start Date..'  onChange={handleChangeSetDate}/>
        {/* <button onClick={() => handleClick('Start Date')}> Set </button> */}
        <p>Enter End Date:</p>
        <input type='date' placeholder='Enter End Date..' onChange={handleChangeEndDate}/>
        {/* <button onClick={() => handleClick('End Date')}> Set </button> */}
        <p>Enter Budget Amount:</p>
        <input placeholder="Input Budget amount.." onChange={handleChangeBudget}/>
        {/* <button onClick={() => handleClickBudget()}> Set Budget</button> */}
        <p>Enter Preferred Country:</p>
        <select value={Location} onChange={handleChangeLocation}>
        <option value="Any">Any</option>

            <option value="America">America</option>

            <option value="Russia">Russia</option>

            <option value="Italy">Italy</option>

            <option value="France">France</option>

            <option value="Germany">Germany</option>

            <option value="Egypt">Egypt</option>

            <option value="Japan">Japan</option>
        </select>
        <p>After values have been filled out, plan your trip!</p>
        <button onClick={() => window.location.reload(true)}>Plan Trip!</button>

        {SetDBParameters(StartDate, EndDate, Budget, Location)};


        
        {/* {
            Trips.map((trip) =>  (
                <div className='card' key={trip.num}>
                    <h3> {trip.countryname} </h3>
                    <p> Rate: {trip.currency} </p>
                    <p> Food: {trip.famousfood} </p>
                    <p> Weather: {Weather.current.temp_c}°C </p>
                    <img 
                    src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                    alt="new"
                    />
                </div>
            ))
        } */}
    </div>
  )
}

function SetDBParameters(StartDate, EndDate, Budget, Location) {
    // implemented DB API
    const [Trips, setTrips] = useState([]);
    const [Currency, setCurrency] = useState('EUR');

    
        useEffect ( () =>{
            axios.get('http://localhost:8080/api/v1.1/countries/countrylist/budget?budget=' + Budget)
            .then(res=>{
                setTrips(res.data)
                console.log(Trips);
        
            })
            .catch(err => console.log(err))
        
          }, [])
    
    
          // WeatherAPI
        const [Weather, setWeather] = useState();
    
        // default to france if user didnt specify
        if(Location == "Any") {
            Location = 'France'
        }

        useEffect ( () =>{
            axios.get('http://api.weatherapi.com/v1/forecast.json?Key=d851801329f8455a8aa161446232305&q=' + Location)
            .then(res=>{
                setWeather(res.data)
                console.log(Weather);
        
            })
            .catch(err => console.log(err))
        
          }, [])

          // CurrencyAPI call
        useEffect ( () =>{
        axios.get('https://api.exchangerate.host/latest?base=EGP&amount=4000')
        .then(res=>{
            setCurrency(res.data)
            console.log(Currency);
    
        })
        .catch(err => console.log(err))
    
      }, [])
    
    


          
    return (
        <div>
           {
            Trips.map((trip) =>  (
                <div className='card' key={trip.num}>
                    <h3> {trip.countryname} </h3>
                    <p> Rate: {trip.currency} </p>
                    <p> Flight costs in Rate: {Currency.rates.EUR} </p>
                    <p> Food: {trip.famousfood} </p>
                    <p> Average Weather: {Weather.current.temp_c}°C </p>
                    <p> Average Price: {trip.averageprice} </p>
                    <img 
                    src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                    alt="new"
                    />
                </div>
            ))
        } 
        </div>
    )
}

export default Home
