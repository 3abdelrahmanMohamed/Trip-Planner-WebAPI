import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

function Currency() {
  const [infos , setInfos] = useState([]);

  useEffect ( () =>{
    axios.get('https://api.exchangerate.host/latest')
    .then(res=>{
        setInfos(res.data)

    })
    .catch(err => console.log(err))

  }, [])
  // console.log(infos)
        let Obj = infos;
        console.log(Obj.rates)
        let amount = 300
    return (
      
    <div>

      {
        // ReturnedData.map(info =>{

          // const {base, rates, date, area} = info;
          // return (

            <div class='card'>

              <h4>Original amount: {amount} </h4>
              <h4>base: {Obj.base} </h4>
              <h4>Rate: {Obj.rates.AED} </h4>
              <h4>Date: {Obj.date} </h4>
              <h4>Final Amount: {amount * Obj.rates.AED} </h4>
              

            </div>
          // )
        // })
      }
</div>
)
    }
export default Currency
