import React, { useState } from 'react'

function Home() {

    const [Trips, setTrips] = useState([
        {num: 1, tripname: "London", rate: 2, food: "british", },
        {num: 2, tripname: "Mexico", rate: 3, food: "american", weather: 21},
        {num: 3, tripname: "Singapore", rate: 5, food: "asian", weather: 21}
    ])



    const handleClick = (name) => {
        console.log("You added a trip" + name)

    }




  return (
    <div>
        <input type='date' placeholder='Enter Start Date' />
        <button onClick={() => handleClick(' Start Date')}> Add </button>
        <input type='date' placeholder='Enter End Date' />
        <button onClick={() => handleClick(' End Date')}> Add </button>
        <input placeholder="Input Budget amount" />
        <button onClick={() => handleClick(' Budget Amount')}> Add </button>
        {
            Trips.map((trip) =>  (
                <div className='myTrips' key={trip.num}>
                    <h3> {trip.tripname} </h3>
                    <p> Rate: {trip.rate} </p>
                    <p> Food: {trip.food} </p>
                    <p> Weather: {trip.weather} celsuius </p>
                </div>
            ))
        }
    </div>
  )
}

export default Home
