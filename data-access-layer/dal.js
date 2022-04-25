const axios = require('axios');

const getMembers = function()
{
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

const getMovies = function()
{
    return axios.get("https://api.tvmaze.com/shows")
}

module.exports = {getMembers, getMovies}