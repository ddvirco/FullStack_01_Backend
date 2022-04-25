const express = require('express');
const userBL = require('../models/userBL');

const router = express.Router();
// Get All
router.get('/', async (request, response) => 
        {
            let users = await userBL.getUsers();
            return response.json(users)

        });
     
        

// Get by Id
router.route('/:id')
    .get(async function(request, response) 
        {
            let id = request.params.id
            let user = await userBL.getOneUser(id);
            return response.json(user)
        });
// Add One
router.route('/')
    .post( async function (req, res) 
        {
            let obj = req.body
            let status = await userBL.createUser(obj)
            return res.json(status)
        })
// Update One
router.route('/:id')
    .put(async function (req, res)
        {
            let obj = req.body;
            let id = req.params.id
            let update = await userBL.updateUser(id, obj)
            return res.json(update)
        })


// Delete One
router.route('/:id')
    .delete( async function(req, resp)
        {
            let id = req.params.id
            let status = await userBL.deleteUser(id)
            return resp.json(status)
        })

module.exports = router;        
