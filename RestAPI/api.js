const express = require('express');
const router = express.Router();
const sql = require('mysql');


// connection configurations
var connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL1234@',
    database: 'countries'
    });
    // connect to database
    connection.connect();


// get a list of countries 
router.get('/countries/countrylist', function(req,res){
    connection.query("select * from countries.countrylist" , (err,result)=>{
				if(err){res.send("error in the connection for get.")}
        else{res.send(result)}
})	
});

//get a list of countries filtered by budget
router.get('/countries/countrylist/budget', function(req,res){
    connection.query("select * from countries.countrylist WHERE averageprice < ?",req.query.budget , (err,result)=>{
				if(err){res.send("error in the connection for get.")}
        else{res.send(result)}
})	
});



// add a new task 
router.post('/countries/countrylist', function(req,res){
    console.log(req.body);
    connection.query("INSERT INTO `countrylist` VALUES (?,?,?,?,?,?);",[req.body.countryname, req.body.famousfood, req.body.currency, req.body.famousactivity,req.body.averageprice,req.body.flag] , (err,result)=>{
        if(err){res.send("error in the connection for post.")}
else{res.send("Task added successfully!")}
})	
});

// update the food
router.put('/countries/:name', function(req,res){
    let name = req.params.name
    let Newfood = req.body.famousfood
    connection.query('update tasks set famousfood = ? where name = ?', [name , famousfood ], (err, result)=> {
        if(err)throw err;
        else{connection.query('SELECT * FROM countries.countrylist where name = ?' ,name, (err, result)=> {
            if(err){res.send("error in the connection")}
            else{res.send(result)}})}
})
});

// delete a country 
router.delete('/countres/:name', function(req,res){
    res.send({type:'Delete'});
});

// to be able to use the API in the index file 
module.exports = router;