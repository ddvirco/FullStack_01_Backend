const express = require('express');
const logic = require('../business-logic-layer/members-logic');
const memberModel = require('../models/memberModel');
const movieModel = require('../models/movieModel');
const subscribeModel = require('../models/subscribeModel');
const userJson = require('../business-logic-layer/user-json');
const userModel = require('../models/userModel');
const router = express.Router();

router.get('/members', async function (req, resp)
// router.get('/members1', async function (req, resp)

{
    // All Data From REST
    // let members = await logic.getAllMembers();
    
    // All Data that I created
    let members = await logic.membersTest()

    // let members = await logic.tryToInsert()

    return resp.json(members)
})

router.post('/members', async function(req, resp)
{
    let obj = new memberModel(req.body)
    let status = await logic.createMember(obj)
    return resp.json(status)

})

// Get Movies 
router.get('/movies', async function (req, resp)
{
    // let movies = await logic.getAllMovies()
    let movies = await logic.getAllMovieFromDB()

    return resp.json(movies)
})

// Add Movie
router.post('/movies', async function (req, resp)
{
    let obj = new movieModel(req.body);
    let status = await logic.AddMovie(obj);
    return resp.json(status) 
})

// Get all Subscribe
router.get('/subscribes', async function(req, resp)
{
    let status = await logic.getAllSubscribe()
    return resp.json(status)
})

// Add newSubscribe
router.post('/subscribes' , async function(req, resp)
{
    let obj = new subscribeModel(req.body);
    let status = await logic.createNewSubscribe(obj);
    return resp.json(status)
})

// Add new User
router.post('/users', async function(req, resp)
{
    let obj = new userModel(req.body);
    let status = await logic.createNewUSer(obj);
    return resp.json(status)
})


// User Json
router.post('/userData', async function(req, res, next)
{
    let status = await userJson.createUser(req.body)
    console.log(status)

    res.send("Created")
})

module.exports = router;