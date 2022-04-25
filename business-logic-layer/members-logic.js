const Dal = require('../data-access-layer/dal');
const MemberModel = require('../models/memberModel');
const movieModel = require('../models/movieModel');
const subscribeModel = require('../models/subscribeModel');
const userModel = require('../models/userModel')

// const userModel = require('../models/userModel');
// const router = require('../routers/userRouter');

const membersTest = async function()
{
    return new Promise((resolve,reject) => 
    {
        MemberModel.find({},function(err,dataFromMongo)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
               resolve(dataFromMongo)
            }
        })
    })
}

const getAllMovieFromDB = async function()
{
    return new Promise((resolve, reject) => 
        {
            movieModel.find({}, function(err, data)
            {
                if(err){
                    reject(err.message)
                }
                else{
                    resolve(data)
                }
            })
        })
}

// Get All Members - אני עשיתי
const getAllMembers = async function()
{
    let resp = await Dal.getMembers();
    // ---------------
    let allData = resp.data
    let allArr = []
    await allData.forEach(x => 
        {
            let obj = {name: x.name, email: x.email, city: x.address.city}
            allArr.push( obj)
        });
    return (allArr)    

    // return resp.data
}

// Add Member
const createMember = function(obj){
    return new Promise((resolve, reject) => 
    {
        let member = new MemberModel({
            name: obj.name,
            email: obj.email,
            city: obj.city
        })
        member.save(function(err)
        {
            if(err){
                reject(err)
            }
            else{
                resolve('Created !')
            }
        })
    })
}

// Get All Movies
const getAllMovies = async function()
{
    let resp = await Dal.getMovies();
    let justTen = resp.data.slice(0,10);
    let justTenData = []
    justTen.forEach(x => {
        let obj = {name: x.name, genres: x.genres.map(item => {return item}), image: x.image.medium, premiered: x.premiered}
        justTenData.push(obj)
    })
    return justTenData
}

// Add Movie
const AddMovie = function(obj){
    return new Promise((resolve, reject)=> {
        let newMovie = new movieModel({
            name: obj.name,
            genres: obj.genres,
            image: obj.image,
            premiered: obj.premiered
        })
        newMovie.save(function(err){
            if(err){
                reject(err)
            }
            else{
                resolve("Movie Add")
            }
        })
    })
}
// Get All Subscribe
const getAllSubscribe = function(){
    return new Promise((resolve, reject)=>
        {
            subscribeModel.find({}, function(err, allSubscribe)
            {
                if(err){
                    reject(err)
                }
                else(
                    resolve(allSubscribe)
                )
            })
        })
}

// Create new Subscribe
const createNewSubscribe = function(obj){
    return new Promise((resolve,reject)=> 
    {
        let newSubscribe = new subscribeModel({
            memberId: obj.memberId,
            memberName: obj.memberName,
            movies: { movieId: obj.movies.movieId,
                    date: obj.movies.date}
        })
        newSubscribe.save(function(err){
                if(err){
                    reject(err)
                }
                else{
                    resolve("New Subscribe")
                }
            })
    })
} 

// Create new User
const createNewUSer = function(obj){
    return new Promise((resolve,reject) => 
        {
            let newUser = new userModel({
                firstName: obj.firstName,
                lastName: obj.lastName,
                permission: obj.permission.map(x => {return x} )
            })
            newUser.save(function(err)
            {
                if(err){
                    reject(err)
                }
                else{
                    resolve('New user added')
                }
            })
        })
}

module.exports = { getAllMembers, getAllMovies, createMember , membersTest, AddMovie, 
                //  tryToInsert,
                getAllSubscribe,getAllMovieFromDB, createNewSubscribe, createNewUSer }